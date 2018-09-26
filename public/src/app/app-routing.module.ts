import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ChatterboxComponent } from './chatterbox/chatterbox.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: SplashComponent},
  {path: 'create', component: CreateComponent},
  {path: 'chat/:id', component: ChatterboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
