import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { onAuthStateChanged } from '@firebase/auth';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  user: User | null = null;

  constructor(private authService: AuthService){
    onAuthStateChanged(authService['auth'], (user) => {
      this.user = user;
    })
  }

  login(){
    this.authService.loginWithGoogle()
    .then(result => {
      this.user = result.user;
      console.log('Logado como: ', this.user.displayName);
    })
    .catch(err => {
      console.log('Erro no login: ', err);
    })
  }

  logout(){
    this.authService.logout()
    .then(() => this.user = null);
  }
}
