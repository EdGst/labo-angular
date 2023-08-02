import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TournamentComponent} from "./tournament/tournament.component";
import {MemberComponent} from "./member/member.component";



const routes: Routes = [
  { path : 'home', component : HomeComponent },

  { path : 'tournament', component : TournamentComponent, loadChildren : () => import("./tournament/tournament.module").then((t) => t.TournamentModule )},
  { path : 'member', component : MemberComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
