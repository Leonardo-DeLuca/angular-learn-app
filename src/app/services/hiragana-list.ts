import { inject, Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { Groups } from './groups';
import { Buttons } from '../interfaces/buttons';

@Injectable({
  providedIn: 'root'
})
export class HiraganaList {
  protected hiraganaList: Character[] = [
    { kana: 'あ', romaji: 'a', group: 'Vogais', strokes: '3 traços', example: 'あめ (ame)', meaning: 'chuva' },
    { kana: 'い', romaji: 'i', group: 'Vogais', strokes: '2 traços', example: 'いす (isu)', meaning: 'cadeira' },
    { kana: 'う', romaji: 'u', group: 'Vogais', strokes: '2 traços', example: 'うま (uma)', meaning: 'cavalo' },
    { kana: 'え', romaji: 'e', group: 'Vogais', strokes: '2 traços', example: 'えき (eki)', meaning: 'estação' },
    { kana: 'お', romaji: 'o', group: 'Vogais', strokes: '3 traços', example: 'おに (oni)', meaning: 'demônio' },
    
    { kana: 'か', romaji: 'ka', group: 'K', strokes: '2 traços', example: 'かさ (kasa)', meaning: 'guarda-chuva' },
    { kana: 'き', romaji: 'ki', group: 'K', strokes: '4 traços', example: 'き (ki)', meaning: 'árvore' },
    { kana: 'く', romaji: 'ku', group: 'K', strokes: '1 traço', example: 'くつ (kutsu)', meaning: 'sapato' },
    { kana: 'け', romaji: 'ke', group: 'K', strokes: '3 traços', example: 'けいさつ (keisatsu)', meaning: 'polícia' },
    { kana: 'こ', romaji: 'ko', group: 'K', strokes: '2 traços', example: 'こども (kodomo)', meaning: 'criança' },
    
    { kana: 'さ', romaji: 'sa', group: 'S', strokes: '3 traços', example: 'さかな (sakana)', meaning: 'peixe' },
    { kana: 'し', romaji: 'shi', group: 'S', strokes: '1 traço', example: 'しお (shio)', meaning: 'sal' },
    { kana: 'す', romaji: 'su', group: 'S', strokes: '2 traços', example: 'すし (sushi)', meaning: 'sushi' },
    { kana: 'せ', romaji: 'se', group: 'S', strokes: '2 traços', example: 'せんせい (sensei)', meaning: 'professor' },
    { kana: 'そ', romaji: 'so', group: 'S', strokes: '1 traço', example: 'そら (sora)', meaning: 'céu' },
    
    { kana: 'た', romaji: 'ta', group: 'T', strokes: '4 traços', example: 'たこ (tako)', meaning: 'polvo' },
    { kana: 'ち', romaji: 'chi', group: 'T', strokes: '2 traços', example: 'ちち (chichi)', meaning: 'pai' },
    { kana: 'つ', romaji: 'tsu', group: 'T', strokes: '1 traço', example: 'つき (tsuki)', meaning: 'lua' },
    { kana: 'て', romaji: 'te', group: 'T', strokes: '1 traço', example: 'て (te)', meaning: 'mão' },
    { kana: 'と', romaji: 'to', group: 'T', strokes: '2 traços', example: 'とけい (tokei)', meaning: 'relógio' },
    
    { kana: 'な', romaji: 'na', group: 'N', strokes: '4 traços', example: 'なす (nasu)', meaning: 'berinjela' },
    { kana: 'に', romaji: 'ni', group: 'N', strokes: '3 traços', example: 'にほん (nihon)', meaning: 'Japão' },
    { kana: 'ぬ', romaji: 'nu', group: 'N', strokes: '2 traços', example: 'ぬいぐるみ (nuigurumi)', meaning: 'pelúcia' },
    { kana: 'ね', romaji: 'ne', group: 'N', strokes: '2 traços', example: 'ねこ (neko)', meaning: 'gato' },
    { kana: 'の', romaji: 'no', group: 'N', strokes: '1 traço', example: 'のり (nori)', meaning: 'alga marinha' },
    
    { kana: 'は', romaji: 'ha', group: 'H', strokes: '3 traços', example: 'はな (hana)', meaning: 'flor' },
    { kana: 'ひ', romaji: 'hi', group: 'H', strokes: '1 traço', example: 'ひこうき (hikouki)', meaning: 'avião' },
    { kana: 'ふ', romaji: 'fu', group: 'H', strokes: '4 traços', example: 'ふね (fune)', meaning: 'navio' },
    { kana: 'へ', romaji: 'he', group: 'H', strokes: '1 traço', example: 'へや (heya)', meaning: 'quarto' },
    { kana: 'ほ', romaji: 'ho', group: 'H', strokes: '4 traços', example: 'ほし (hoshi)', meaning: 'estrela' },
    
    { kana: 'ま', romaji: 'ma', group: 'M', strokes: '3 traços', example: 'まんが (manga)', meaning: 'quadrinhos' },
    { kana: 'み', romaji: 'mi', group: 'M', strokes: '2 traços', example: 'みず (mizu)', meaning: 'água' },
    { kana: 'む', romaji: 'mu', group: 'M', strokes: '3 traços', example: 'むし (mushi)', meaning: 'inseto' },
    { kana: 'め', romaji: 'me', group: 'M', strokes: '2 traços', example: 'め (me)', meaning: 'olho' },
    { kana: 'も', romaji: 'mo', group: 'M', strokes: '3 traços', example: 'もも (momo)', meaning: 'pêssego' },
    
    { kana: 'や', romaji: 'ya', group: 'Y', strokes: '3 traços', example: 'やま (yama)', meaning: 'montanha' },
    { kana: 'ゆ', romaji: 'yu', group: 'Y', strokes: '2 traços', example: 'ゆき (yuki)', meaning: 'neve' },
    { kana: 'よ', romaji: 'yo', group: 'Y', strokes: '2 traços', example: 'よる (yoru)', meaning: 'noite' },
    
    { kana: 'ら', romaji: 'ra', group: 'R', strokes: '2 traços', example: 'らくだ (rakuda)', meaning: 'camelo' },
    { kana: 'り', romaji: 'ri', group: 'R', strokes: '2 traços', example: 'りんご (ringo)', meaning: 'maçã' },
    { kana: 'る', romaji: 'ru', group: 'R', strokes: '1 traço', example: 'るす (rusu)', meaning: 'ausência' },
    { kana: 'れ', romaji: 're', group: 'R', strokes: '2 traços', example: 'れんしゅう (renshuu)', meaning: 'prática' },
    { kana: 'ろ', romaji: 'ro', group: 'R', strokes: '1 traço', example: 'ろうか (rouka)', meaning: 'corredor' },
    
    { kana: 'わ', romaji: 'wa', group: 'W', strokes: '2 traços', example: 'わに (wani)', meaning: 'crocodilo' },
    { kana: 'を', romaji: 'wo', group: 'W', strokes: '3 traços', example: 'を (partícula)', meaning: 'partícula objeto' },
    { kana: 'ん', romaji: 'n', group: 'W', strokes: '1 traço', example: 'にほんご (nihongo)', meaning: 'língua japonesa' }
  ]
  
  groupsService: Groups = inject(Groups);

  getAll(): Character[]{
    return this.hiraganaList;
  }

  getByGroup(group: number): Character[]{
    let groupString: string = this.groupsService.getTextById(group).toLowerCase();

    return this.hiraganaList.filter((character) => character.group.toLowerCase() === groupString);
  }

  getLenght(): number{
    return this.hiraganaList.length;
  }

  getRandom(): Character{
    const randomIndex = Math.floor(Math.random() * this.hiraganaList.length);
    return this.hiraganaList[randomIndex];
  }

  getByKana(kana: string): Character{
    const result = this.hiraganaList.find(character => character.kana === kana);

    return result!;
  } 
}
