import { Routes } from '@angular/router';
import { AlfabetoPage } from './components/alfabeto-page/alfabeto-page';
import { QuizPage } from './components/quiz-page/quiz-page';
import { KanjiPage } from './components/kanji-page/kanji-page';
import { LoginPage } from './components/login-page/login-page';


export const routes: Routes = [
    {path: '', redirectTo: 'alfabeto', pathMatch: 'full'},
    {path: 'alfabeto', component: AlfabetoPage},
    {path: 'quiz', component: QuizPage},
    {path: 'kanji', component: KanjiPage},
    {path: 'login', component: LoginPage}
    
];
