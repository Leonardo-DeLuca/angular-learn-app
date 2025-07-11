import { Injectable } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class HiraganaList {
  protected hiraganaList: Character[] = [
    { kana: 'あ', romaji: 'a', group: 'vowels', strokes: '3 traços', example: 'あめ (ame)', meaning: 'chuva' },
    { kana: 'い', romaji: 'i', group: 'vowels', strokes: '2 traços', example: 'いす (isu)', meaning: 'cadeira' },
    { kana: 'う', romaji: 'u', group: 'vowels', strokes: '2 traços', example: 'うま (uma)', meaning: 'cavalo' },
    { kana: 'え', romaji: 'e', group: 'vowels', strokes: '2 traços', example: 'えき (eki)', meaning: 'estação' },
    { kana: 'お', romaji: 'o', group: 'vowels', strokes: '3 traços', example: 'おに (oni)', meaning: 'demônio' },
    
    { kana: 'か', romaji: 'ka', group: 'k', strokes: '2 traços', example: 'かさ (kasa)', meaning: 'guarda-chuva' },
    { kana: 'き', romaji: 'ki', group: 'k', strokes: '4 traços', example: 'き (ki)', meaning: 'árvore' },
    { kana: 'く', romaji: 'ku', group: 'k', strokes: '1 traço', example: 'くつ (kutsu)', meaning: 'sapato' },
    { kana: 'け', romaji: 'ke', group: 'k', strokes: '3 traços', example: 'けいさつ (keisatsu)', meaning: 'polícia' },
    { kana: 'こ', romaji: 'ko', group: 'k', strokes: '2 traços', example: 'こども (kodomo)', meaning: 'criança' },
    
    { kana: 'さ', romaji: 'sa', group: 's', strokes: '3 traços', example: 'さかな (sakana)', meaning: 'peixe' },
    { kana: 'し', romaji: 'shi', group: 's', strokes: '1 traço', example: 'しお (shio)', meaning: 'sal' },
    { kana: 'す', romaji: 'su', group: 's', strokes: '2 traços', example: 'すし (sushi)', meaning: 'sushi' },
    { kana: 'せ', romaji: 'se', group: 's', strokes: '2 traços', example: 'せんせい (sensei)', meaning: 'professor' },
    { kana: 'そ', romaji: 'so', group: 's', strokes: '1 traço', example: 'そら (sora)', meaning: 'céu' },
    
    { kana: 'た', romaji: 'ta', group: 't', strokes: '4 traços', example: 'たこ (tako)', meaning: 'polvo' },
    { kana: 'ち', romaji: 'chi', group: 't', strokes: '2 traços', example: 'ちち (chichi)', meaning: 'pai' },
    { kana: 'つ', romaji: 'tsu', group: 't', strokes: '1 traço', example: 'つき (tsuki)', meaning: 'lua' },
    { kana: 'て', romaji: 'te', group: 't', strokes: '1 traço', example: 'て (te)', meaning: 'mão' },
    { kana: 'と', romaji: 'to', group: 't', strokes: '2 traços', example: 'とけい (tokei)', meaning: 'relógio' },
    
    { kana: 'な', romaji: 'na', group: 'n', strokes: '4 traços', example: 'なす (nasu)', meaning: 'berinjela' },
    { kana: 'に', romaji: 'ni', group: 'n', strokes: '3 traços', example: 'にほん (nihon)', meaning: 'Japão' },
    { kana: 'ぬ', romaji: 'nu', group: 'n', strokes: '2 traços', example: 'ぬいぐるみ (nuigurumi)', meaning: 'pelúcia' },
    { kana: 'ね', romaji: 'ne', group: 'n', strokes: '2 traços', example: 'ねこ (neko)', meaning: 'gato' },
    { kana: 'の', romaji: 'no', group: 'n', strokes: '1 traço', example: 'のり (nori)', meaning: 'alga marinha' },
    
    { kana: 'は', romaji: 'ha', group: 'h', strokes: '3 traços', example: 'はな (hana)', meaning: 'flor' },
    { kana: 'ひ', romaji: 'hi', group: 'h', strokes: '1 traço', example: 'ひこうき (hikouki)', meaning: 'avião' },
    { kana: 'ふ', romaji: 'fu', group: 'h', strokes: '4 traços', example: 'ふね (fune)', meaning: 'navio' },
    { kana: 'へ', romaji: 'he', group: 'h', strokes: '1 traço', example: 'へや (heya)', meaning: 'quarto' },
    { kana: 'ほ', romaji: 'ho', group: 'h', strokes: '4 traços', example: 'ほし (hoshi)', meaning: 'estrela' },
    
    { kana: 'ま', romaji: 'ma', group: 'm', strokes: '3 traços', example: 'まんが (manga)', meaning: 'quadrinhos' },
    { kana: 'み', romaji: 'mi', group: 'm', strokes: '2 traços', example: 'みず (mizu)', meaning: 'água' },
    { kana: 'む', romaji: 'mu', group: 'm', strokes: '3 traços', example: 'むし (mushi)', meaning: 'inseto' },
    { kana: 'め', romaji: 'me', group: 'm', strokes: '2 traços', example: 'め (me)', meaning: 'olho' },
    { kana: 'も', romaji: 'mo', group: 'm', strokes: '3 traços', example: 'もも (momo)', meaning: 'pêssego' },
    
    { kana: 'や', romaji: 'ya', group: 'y', strokes: '3 traços', example: 'やま (yama)', meaning: 'montanha' },
    { kana: 'ゆ', romaji: 'yu', group: 'y', strokes: '2 traços', example: 'ゆき (yuki)', meaning: 'neve' },
    { kana: 'よ', romaji: 'yo', group: 'y', strokes: '2 traços', example: 'よる (yoru)', meaning: 'noite' },
    
    { kana: 'ら', romaji: 'ra', group: 'r', strokes: '2 traços', example: 'らくだ (rakuda)', meaning: 'camelo' },
    { kana: 'り', romaji: 'ri', group: 'r', strokes: '2 traços', example: 'りんご (ringo)', meaning: 'maçã' },
    { kana: 'る', romaji: 'ru', group: 'r', strokes: '1 traço', example: 'るす (rusu)', meaning: 'ausência' },
    { kana: 'れ', romaji: 're', group: 'r', strokes: '2 traços', example: 'れんしゅう (renshuu)', meaning: 'prática' },
    { kana: 'ろ', romaji: 'ro', group: 'r', strokes: '1 traço', example: 'ろうか (rouka)', meaning: 'corredor' },
    
    { kana: 'わ', romaji: 'wa', group: 'w', strokes: '2 traços', example: 'わに (wani)', meaning: 'crocodilo' },
    { kana: 'を', romaji: 'wo', group: 'w', strokes: '3 traços', example: 'を (partícula)', meaning: 'partícula objeto' },
    { kana: 'ん', romaji: 'n', group: 'w', strokes: '1 traço', example: 'にほんご (nihongo)', meaning: 'língua japonesa' }
  ]

  getAll(): Character[]{
    return this.hiraganaList;
  }
}
