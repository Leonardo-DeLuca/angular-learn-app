import { Component, inject } from '@angular/core';
import { HiraganaList } from '../../services/hiragana-list';
import { KatakanaList } from '../../services/katakana-list';
import { OptionButton } from './option-button/option-button';
import { LastQuestion } from '../../interfaces/last-question';
import { ScoreService } from '../../services/score';
import { AuthService } from '../../services/auth.service';
import { InputResp } from "./input-resp/input-resp";

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [OptionButton, InputResp],
  templateUrl: './quiz-page.html',
  styleUrl: './quiz-page.css'
})
export class QuizPage {
  question = "";
  correctAnswer = "";
  alternativas: string[] = [];  
  corretas: number = 0;
  erradas: number = 0;
  perguntasTotais: number = 0;
  modoEscrita: boolean = false;
  statusInput: string = "";

  selectedAnswer: string | null = null;

  hiraganaService = inject(HiraganaList);
  katakanaService = inject(KatakanaList);
  scoreService = inject(ScoreService);
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(() => {
      this.loadScore();
    });
  }  

  private loadScore(): void {
    this.scoreService.getScore().then(score => {
      if (score) {
        this.corretas = score.correct;
        this.erradas = score.wrong;
        this.perguntasTotais = score.total;
        this.modoEscrita = score.modoEscrita ?? false;

        if (score.lastQuestion) {
          this.restoreQuestion(score.lastQuestion);
        } else {
          this.novaPergunta();
        }
      } else {
        this.novaPergunta();
      }
    });
  }

  resetQuiz(): void {
    this.corretas = 0;
    this.erradas = 0;
    this.perguntasTotais = 0;
    this.novaPergunta();
    this.salvaEstado();
  }

  novaPergunta(): void {
    const novo = this.geraNovoCaracter();
    this.question = novo.kana;
    this.correctAnswer = novo.romaji;
    this.alternativas = this.geraAlternativas(novo.romaji);
    this.selectedAnswer = null;
    this.statusInput = "";
    this.perguntasTotais++;
    this.salvaEstado();
  }

  restoreQuestion(last: LastQuestion): void {
    this.question = last.question;
    this.correctAnswer =
      this.hiraganaService.getByKana(this.question)?.romaji ??
      this.katakanaService.getByKana(this.question)?.romaji ??
      (() => { throw new Error(`Kana "${this.question}" não encontrado.`); })();
    this.alternativas = last.alternativas;
    this.selectedAnswer = last.selectedAnswer ?? null;

    if (this.selectedAnswer) {
      this.statusInput = this.selectedAnswer === this.correctAnswer ? 'correct' : 'incorrect';
    } else {
      this.statusInput = '';
    }
  }

  geraNovoCaracter(): { kana: string; romaji: string } {
    const isHiragana = Math.random() < 0.5;
    const rnd = isHiragana
      ? this.hiraganaService.getRandom()
      : this.katakanaService.getRandom();
    return { kana: rnd.kana, romaji: rnd.romaji };
  }

  geraAlternativas(correctRomaji: string): string[] {
    const todas = [...this.hiraganaService.getAll(), ...this.katakanaService.getAll()];
    const setAlt = new Set<string>([correctRomaji]);
    while (setAlt.size < 4) {
      setAlt.add(todas[Math.floor(Math.random() * todas.length)].romaji);
    }
    return Array.from(setAlt).sort(() => Math.random() - 0.5);
  }

  verificaResposta(resposta: string): void {
    if (this.selectedAnswer) return;
    this.selectedAnswer = resposta;

    if (resposta === this.correctAnswer) {
      this.corretas++;
      this.statusInput = 'correct';
    } else {
      this.erradas++;
      this.statusInput = 'incorrect';
    }

    this.salvaEstado();
  }

  verificaRespostaTexto(resposta: string): void{
    this.verificaResposta(resposta);
  }

  onEnterPress(resposta: string): void {
    if (!this.selectedAnswer) {
      this.verificaRespostaTexto(resposta);
    } else {
      this.novaPergunta();
    }
  }

  getStatus(alt: string): 'correct' | 'incorrect' | 'neutral' {
    if (!this.selectedAnswer) return 'neutral';
    if (alt === this.correctAnswer) return 'correct';
    if (alt === this.selectedAnswer) return 'incorrect';
    return 'neutral';
  }

  private salvaEstado(): void {
    const last: LastQuestion = {
      question: this.question,
      alternativas: this.alternativas,
      selectedAnswer: this.selectedAnswer
    };
    this.scoreService.saveScore(this.corretas, this.erradas, this.perguntasTotais, last, this.modoEscrita);
  }

  alterarModo() : void{
    this.modoEscrita = !this.modoEscrita;
    this.salvaEstado();
  }
}
