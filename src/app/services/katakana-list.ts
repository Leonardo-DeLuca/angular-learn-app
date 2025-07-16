import { inject, Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { Groups } from './groups';

@Injectable({
  providedIn: 'root'
})
export class KatakanaList {
  protected katakanaList: Character[]= [
    { kana: 'ア', romaji: 'a', group: 'Vogais', strokes: '2 traços', example: 'アメリカ (amerika)', meaning: 'América' },
            { kana: 'イ', romaji: 'i', group: 'Vogais', strokes: '2 traços', example: 'イタリア (itaria)', meaning: 'Itália' },
            { kana: 'ウ', romaji: 'u', group: 'Vogais', strokes: '3 traços', example: 'ウイスキー (uisukii)', meaning: 'uísque' },
            { kana: 'エ', romaji: 'e', group: 'Vogais', strokes: '3 traços', example: 'エレベーター (erebeetaa)', meaning: 'elevador' },
            { kana: 'オ', romaji: 'o', group: 'Vogais', strokes: '3 traços', example: 'オレンジ (orenji)', meaning: 'laranja' },
            
            { kana: 'カ', romaji: 'ka', group: 'k', strokes: '2 traços', example: 'カメラ (kamera)', meaning: 'câmera' },
            { kana: 'キ', romaji: 'ki', group: 'k', strokes: '3 traços', example: 'キーボード (kiiboodo)', meaning: 'teclado' },
            { kana: 'ク', romaji: 'ku', group: 'k', strokes: '2 traços', example: 'クッキー (kukkii)', meaning: 'biscoito' },
            { kana: 'ケ', romaji: 'ke', group: 'k', strokes: '3 traços', example: 'ケーキ (keeki)', meaning: 'bolo' },
            { kana: 'コ', romaji: 'ko', group: 'k', strokes: '2 traços', example: 'コーヒー (koohii)', meaning: 'café' },
            
            { kana: 'サ', romaji: 'sa', group: 's', strokes: '3 traços', example: 'サラダ (sarada)', meaning: 'salada' },
            { kana: 'シ', romaji: 'shi', group: 's', strokes: '3 traços', example: 'シャワー (shawaa)', meaning: 'chuveiro' },
            { kana: 'ス', romaji: 'su', group: 's', strokes: '2 traços', example: 'スーパー (suupaa)', meaning: 'supermercado' },
            { kana: 'セ', romaji: 'se', group: 's', strokes: '2 traços', example: 'セーター (seetaa)', meaning: 'suéter' },
            { kana: 'ソ', romaji: 'so', group: 's', strokes: '2 traços', example: 'ソファ (sofa)', meaning: 'sofá' },
            
            { kana: 'タ', romaji: 'ta', group: 't', strokes: '3 traços', example: 'タクシー (takushii)', meaning: 'táxi' },
            { kana: 'チ', romaji: 'chi', group: 't', strokes: '2 traços', example: 'チーズ (chiizu)', meaning: 'queijo' },
            { kana: 'ツ', romaji: 'tsu', group: 't', strokes: '3 traços', example: 'ツアー (tsuaa)', meaning: 'passeio' },
            { kana: 'テ', romaji: 'te', group: 't', strokes: '2 traços', example: 'テレビ (terebi)', meaning: 'televisão' },
            { kana: 'ト', romaji: 'to', group: 't', strokes: '2 traços', example: 'トマト (tomato)', meaning: 'tomate' },
            
            { kana: 'ナ', romaji: 'na', group: 'n', strokes: '2 traços', example: 'ナイフ (naifu)', meaning: 'faca' },
            { kana: 'ニ', romaji: 'ni', group: 'n', strokes: '2 traços', example: 'ニンジン (ninjin)', meaning: 'cenoura' },
            { kana: 'ヌ', romaji: 'nu', group: 'n', strokes: '2 traços', example: 'ヌードル (nuudoru)', meaning: 'macarrão' },
            { kana: 'ネ', romaji: 'ne', group: 'n', strokes: '4 traços', example: 'ネクタイ (nekutai)', meaning: 'gravata' },
            { kana: 'ノ', romaji: 'no', group: 'n', strokes: '1 traço', example: 'ノート (nooto)', meaning: 'caderno' },
            
            { kana: 'ハ', romaji: 'ha', group: 'h', strokes: '2 traços', example: 'ハンバーガー (hanbaagaa)', meaning: 'hambúrguer' },
            { kana: 'ヒ', romaji: 'hi', group: 'h', strokes: '2 traços', example: 'ヒーター (hiitaa)', meaning: 'aquecedor' },
            { kana: 'フ', romaji: 'fu', group: 'h', strokes: '1 traço', example: 'フライパン (furaipan)', meaning: 'frigideira' },
            { kana: 'ヘ', romaji: 'he', group: 'h', strokes: '1 traço', example: 'ヘリコプター (herikoputaa)', meaning: 'helicóptero' },
            { kana: 'ホ', romaji: 'ho', group: 'h', strokes: '4 traços', example: 'ホテル (hoteru)', meaning: 'hotel' },
            
            { kana: 'マ', romaji: 'ma', group: 'm', strokes: '2 traços', example: 'マンガ (manga)', meaning: 'quadrinhos' },
            { kana: 'ミ', romaji: 'mi', group: 'm', strokes: '3 traços', example: 'ミルク (miruku)', meaning: 'leite' },
            { kana: 'ム', romaji: 'mu', group: 'm', strokes: '2 traços', example: 'ムービー (muubii)', meaning: 'filme' },
            { kana: 'メ', romaji: 'me', group: 'm', strokes: '2 traços', example: 'メニュー (menyuu)', meaning: 'cardápio' },
            { kana: 'モ', romaji: 'mo', group: 'm', strokes: '3 traços', example: 'モニター (monitaa)', meaning: 'monitor' },
            
            { kana: 'ヤ', romaji: 'ya', group: 'y', strokes: '3 traços', example: 'ヤクルト (yakuruto)', meaning: 'yakult' },
            { kana: 'ユ', romaji: 'yu', group: 'y', strokes: '2 traços', example: 'ユーモア (yuumoa)', meaning: 'humor' },
            { kana: 'ヨ', romaji: 'yo', group: 'y', strokes: '2 traços', example: 'ヨーロッパ (yooroppa)', meaning: 'Europa' },
            
            { kana: 'ラ', romaji: 'ra', group: 'r', strokes: '2 traços', example: 'ラーメン (raamen)', meaning: 'lámen' },
            { kana: 'リ', romaji: 'ri', group: 'r', strokes: '2 traços', example: 'リモコン (rimokon)', meaning: 'controle remoto' },
            { kana: 'ル', romaji: 'ru', group: 'r', strokes: '2 traços', example: 'ルール (ruuru)', meaning: 'regra' },
            { kana: 'レ', romaji: 're', group: 'r', strokes: '1 traço', example: 'レストラン (resutoran)', meaning: 'restaurante' },
            { kana: 'ロ', romaji: 'ro', group: 'r', strokes: '3 traços', example: 'ロボット (robotto)', meaning: 'robô' },
            
            { kana: 'ワ', romaji: 'wa', group: 'w', strokes: '2 traços', example: 'ワイン (wain)', meaning: 'vinho' },
            { kana: 'ヲ', romaji: 'wo', group: 'w', strokes: '3 traços', example: 'ヲ (partícula)', meaning: 'partícula objeto' },
            { kana: 'ン', romaji: 'n', group: 'w', strokes: '2 traços', example: 'ペン (pen)', meaning: 'caneta' }
  ]

  groupsService: Groups = inject(Groups);

  getAll(): Character[]{
    return this.katakanaList;
  }

  getByGroup(group: number): Character[]{
    let groupString: string = this.groupsService.getTextById(group).toLowerCase();

    return this.katakanaList.filter((character) => groupString === character.group.toLowerCase());
  }

  getLenght(): number{
    return this.katakanaList.length;
  }

  getRandom(): Character{
    const randomIndex = Math.floor(Math.random() * this.katakanaList.length);
    return this.katakanaList[randomIndex];
  }
}
