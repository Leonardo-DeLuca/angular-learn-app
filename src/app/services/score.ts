import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  async saveScore(correct: number, wrong: number, total: number, lastQuestion: any = null, modoEscrita: boolean = false) {
    let user = this.authService.currentUser();

    if (!user) {
      console.warn('Usuário não encontrado de imediato. Tentando aguardar auth...');
      await new Promise(resolve => setTimeout(resolve, 500));
      user = this.authService.currentUser();
    }

    const scoreData = {
      correct,
      wrong,
      total,
      lastQuestion,
      modoEscrita,
      updatedAt: new Date()
    };

    if (user) {
      const userScoreRef = doc(this.firestore, `scores/${user.uid}`);
      await setDoc(userScoreRef, {
        uid: user.uid,
        displayName: user.displayName,
        ...scoreData
      });
      console.log('Score salvo no Firestore para', user.displayName);
    } else {
      sessionStorage.setItem('quizScore', JSON.stringify(scoreData));
      console.log('Score salvo no SessionStorage');
    }
  }

  async getScore(): Promise<any | null> {
    let user = this.authService.currentUser();

    if (!user) {
      console.warn('Usuário não encontrado de imediato para getScore. Tentando aguardar auth...');
      await new Promise(resolve => setTimeout(resolve, 500));
      user = this.authService.currentUser();
    }

    if (user) {
      const userScoreRef = doc(this.firestore, `scores/${user.uid}`);
      const snapshot = await getDoc(userScoreRef);

      if (snapshot.exists()) {
        console.log('Score recuperado com sucesso do Firestore para', user.displayName);
        return snapshot.data();
      } else {
        console.log('Nenhum score encontrado para', user.displayName);
        return null;
      }
    } else {
      const data = sessionStorage.getItem('quizScore');
      if (data) {
        console.log('Score recuperado do SessionStorage');
        return JSON.parse(data);
      }
      console.log('Nenhum score encontrado no SessionStorage');
      return null;
    }
  }
}
