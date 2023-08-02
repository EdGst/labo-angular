import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {MemberComponent} from "./member/member.component";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MemberComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
