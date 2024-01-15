import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: 'home', pathMatch: 'full', component: HomePageComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
