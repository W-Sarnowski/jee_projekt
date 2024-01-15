import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: 'home', pathMatch: 'full', component: HomePageComponent},
  {path: 'login', pathMatch: 'full', component: LoginPageComponent},
  {path: 'register', pathMatch: 'full', component: RegisterPageComponent},

];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
