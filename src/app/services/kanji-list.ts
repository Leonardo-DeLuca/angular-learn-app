import { Injectable } from '@angular/core';
import { Kanji } from '../interfaces/kanji';

@Injectable({
  providedIn: 'root'
})
export class KanjiList {
  protected kanjiList: Kanji[] = [
    {
      character: "一",
      meaning: "um",
      readings: "on: いち (ichi), いつ (itsu); kun: ひと (hito)",
      example: "一人 (ひとり) – uma pessoa",
      strokes: 1
    },
    {
      character: "二",
      meaning: "dois",
      readings: "on: に (ni), じ (ji); kun: ふた (futa)",
      example: "二人 (ふたり) – duas pessoas",
      strokes: 2
    },
    {
      character: "三",
      meaning: "três",
      readings: "on: さん (san); kun: み (mi), みつ (mitsu)",
      example: "三日 (みっか) – terceiro dia",
      strokes: 3
    },
    {
      character: "四",
      meaning: "quatro",
      readings: "on: し (shi); kun: よ (yo), よん (yon)",
      example: "四月 (しがつ) – abril",
      strokes: 5
    },
    {
      character: "五",
      meaning: "cinco",
      readings: "on: ご (go); kun: いつ (itsu)",
      example: "五月 (ごがつ) – maio",
      strokes: 4
    },
    {
      character: "六",
      meaning: "seis",
      readings: "on: ろく (roku); kun: む (mu), むつ (mutsu)",
      example: "六月 (ろくがつ) – junho",
      strokes: 4
    },
    {
      character: "七",
      meaning: "sete",
      readings: "on: しち (shichi); kun: なな (nana), ななつ (nanatsu)",
      example: "七月 (しちがつ) – julho",
      strokes: 2
    },
    {
      character: "八",
      meaning: "oito",
      readings: "on: はち (hachi); kun: や (ya), やつ (yatsu), やっつ (yattsu)",
      example: "八時 (はちじ) – oito horas",
      strokes: 2
    },
    {
      character: "九",
      meaning: "nove",
      readings: "on: きゅう (kyū), く (ku); kun: ここの (kokono), ここのつ (kokonotsu)",
      example: "九月 (くがつ) – setembro",
      strokes: 2
    },
    {
      character: "十",
      meaning: "dez",
      readings: "on: じゅう (jū), じゅっ (jutt), じっ (jitt); kun: とお (tō)",
      example: "十人 (じゅうにん) – dez pessoas",
      strokes: 2
    },
    {
      character: "百",
      meaning: "cem",
      readings: "on: ひゃく (hyaku); kun: もも (momo)",
      example: "百円 (ひゃくえん) – cem ienes",
      strokes: 6
    },
    {
      character: "千",
      meaning: "mil",
      readings: "on: せん (sen); kun: ち (chi)",
      example: "千円 (せんえん) – mil ienes",
      strokes: 3
    },
    {
      character: "上",
      meaning: "acima, em cima",
      readings: "on: じょう (jō); kun: うえ (ue)",
      example: "上手 (じょうず) – habilidoso",
      strokes: 3
    },
    {
      character: "下",
      meaning: "abaixo, embaixo",
      readings: "on: か (ka), げ (ge); kun: した (shita)",
      example: "地下 (ちか) – subterrâneo",
      strokes: 3
    },
    {
      character: "左",
      meaning: "esquerda",
      readings: "on: さ (sa); kun: ひだり (hidari)",
      example: "左手 (ひだりて) – mão esquerda",
      strokes: 5
    },
    {
      character: "右",
      meaning: "direita",
      readings: "on: う (u), ゆう (yū); kun: みぎ (migi)",
      example: "右足 (みぎあし) – pé direito",
      strokes: 5
    },
    {
      character: "中",
      meaning: "meio, dentro",
      readings: "on: ちゅう (chū), じゅう (jū); kun: なか (naka)",
      example: "中国 (ちゅうごく) – China",
      strokes: 4
    },
    {
      character: "大",
      meaning: "grande",
      readings: "on: だい (dai), たい (tai); kun: おお‐きい (ō‐kii)",
      example: "大人 (おとな) – adulto",
      strokes: 3
    },
    {
      character: "小",
      meaning: "pequeno",
      readings: "on: しょう (shō); kun: ちい‐さい (chii-sai)",
      example: "小学校 (しょうがっこう) – escola primária",
      strokes: 3
    },
    {
      character: "月",
      meaning: "lua, mês",
      readings: "on: がつ (gatsu), げつ (getsu); kun: つき (tsuki)",
      example: "月曜日 (げつようび) – segunda-feira",
      strokes: 4
    }
  ];

    getAll(): Kanji[]{
      return this.kanjiList;
    }
  
    getLenght(): number{
      return this.kanjiList.length;
    }
  
    getRandom(): Kanji{
      const randomIndex = Math.floor(Math.random() * this.kanjiList.length);
      return this.kanjiList[randomIndex];
    }
  
    getByCharacter(character: string): Kanji{
      const result = this.kanjiList.find(kanji => kanji.character === character);
  
      return result!;
    }
}
