import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TournamentComponent} from './tournament.component';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {TournamentRoutingModule} from "./tournament-routing.module";


@NgModule({
  declarations: [
    TournamentComponent,
    IndexComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule
  ],
  bootstrap: [TournamentComponent]
})
export class TournamentModule {
}
