import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class MemberModule { }
