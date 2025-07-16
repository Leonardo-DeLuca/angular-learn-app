import { Component, inject } from '@angular/core';
import { HiraganaList } from '../../services/hiragana-list';
import { KatakanaList } from '../../services/katakana-list';
import { OptionButton } from './option-button/option-button';

@Component({
  selector: 'app-quiz-page',
  imports: [OptionButton],
  templateUrl: './quiz-page.html',
  styleUrl: './quiz-page.css'
})
export class QuizPage {
  question = "";
  correctAnswer = "";
  alternativas: string[] = [];
  corretas = 0;
  erradas = 0;
  perguntasTotais = 0;

  selectedAnswer: string | null = null;

  hiraganaService = inject(HiraganaList);
  katakanaService = inject(KatakanaList);

  ngOnInit(): void {
    this.corretas = Number(localStorage.getItem("Acertos")) ?? 0;
    this.erradas =  Number(localStorage.getItem("Erros")) ?? 0;
    this.perguntasTotais = Number(localStorage.getItem("Perguntas") ?? 1) - 1;
    !localStorage.getItem("LastQuetion") ? this.proximaPergunta() : this.setPerguntaAntiga(JSON.parse(localStorage.getItem("LastQuetion")!));
  }

  resetQuiz(): void {
    this.corretas = 0;
    this.erradas =  0;
    this.perguntasTotais = 0;
    this.proximaPergunta();
    this.salvaPontuacao();
  }

  geraNovoCaracter(): { kana: string; romaji: string } {
    const isHiragana = Math.random() < 0.5;
    const rnd = isHiragana
      ? this.hiraganaService.getRandom()
      : this.katakanaService.getRandom();
    return { kana: rnd.kana, romaji: rnd.romaji };
  }

  proximaPergunta(): void {
    const novo = this.geraNovoCaracter();
    this.question = novo.kana;
    this.correctAnswer = novo.romaji;
    this.alternativas = this.geraAlternativas(novo.romaji);
    this.selectedAnswer = null;
    this.perguntasTotais++;
    this.salvaLastQuestion();
  }

  setPerguntaAntiga(pergunta: {question: string, correctAnswer: string, alternativas: string[]}): void{
    this.question = pergunta.question;
    this.correctAnswer = pergunta.correctAnswer;
    this.alternativas = pergunta.alternativas;
    this.perguntasTotais++;
  }

  geraAlternativas(correctRomaji: string): string[] {
    const todas = [
      ...this.hiraganaService.getAll(),
      ...this.katakanaService.getAll()
    ];
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
    } else {
      this.erradas++;
    }

    this.salvaPontuacao();
  }

  getStatus(alt: string): 'correct' | 'incorrect' | 'neutral' {
    if (!this.selectedAnswer) return 'neutral';
    if (alt === this.correctAnswer) return 'correct';
    if (alt === this.selectedAnswer) return 'incorrect';
    return 'neutral';
  }

  salvaPontuacao(): void{
    localStorage.setItem("Erros", this.erradas.toString());
    localStorage.setItem("Acertos", this.corretas.toString());
  }

  salvaLastQuestion(): void{
    const lastQuestion: {question: string, correctAnswer: string, alternativas: string[]} = {
      question: this.question,
      correctAnswer: this.correctAnswer,
      alternativas: this.alternativas
    };

    localStorage.setItem("Perguntas", this.perguntasTotais.toString());
    localStorage.setItem("LastQuetion", JSON.stringify(lastQuestion));
  }
}
