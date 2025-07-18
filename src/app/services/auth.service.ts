import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, User, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
  
    return await signInWithPopup(this.auth, provider);
  }

  logout() {
    return signOut(this.auth);
  }

  currentUser(): User | null {
    if (!this.auth.currentUser) {
      console.warn('AuthService: Nenhum usuário autenticado no momento.');
    }
    return this.auth.currentUser;
  }

  get authInstance(): Auth{
    return this.auth;
  }
}
