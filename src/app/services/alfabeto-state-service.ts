import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlfabetoStateService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  async saveCheckedStates(checkedStates: Record<string, boolean>): Promise<void> {
    const user = this.authService.currentUser();
    if (user) {
      const stateRef = doc(this.firestore, `alfabetoStates/${user.uid}`);
      await setDoc(stateRef, {
        checkedStates,
        updatedAt: new Date()
      });
      console.log('Estados do alfabeto salvos no Firestore para', user.displayName);
    } else {
      sessionStorage.setItem('checkedStates', JSON.stringify(checkedStates));
      console.log('Estados do alfabeto salvos no SessionStorage');
    }
  }

  async getCheckedStates(): Promise<Record<string, boolean>> {
    const user = this.authService.currentUser();
    if (user) {
      const stateRef = doc(this.firestore, `alfabetoStates/${user.uid}`);
      const snapshot = await getDoc(stateRef);
      if (snapshot.exists()) {
        console.log('Estados do alfabeto recuperados do Firestore para', user.displayName);
        return snapshot.data()['checkedStates'] || {};
      }
      console.log('Nenhum estado de alfabeto encontrado no Firestore para', user.displayName);
      return {};
    } else {
      const data = sessionStorage.getItem('checkedStates');
      if (data) {
        console.log('Estados do alfabeto recuperados do SessionStorage');
        return JSON.parse(data);
      }
      console.log('Nenhum estado de alfabeto encontrado no SessionStorage');
      return {};
    }
  }
}
