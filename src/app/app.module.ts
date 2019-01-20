import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NoContentComponent} from "./no-content/no-content.component";
import {CardFormModule} from "./card/card-form.module";
import {TradeFormComponent} from "./card/card-form/trade-form.component";
import {SignModule} from "./sign/sign.module";
import {SignComponent} from "./sign/sign.component";
import {PanelModule} from "primeng/panel";

export const routes: Routes = [
  {
    path: '',
    component: TradeFormComponent
  },
  {
    path: 'sign/:privateKey/:proof',
    component: SignComponent
  },
  {
    path: '**',
    component: NoContentComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  imports: [
    CommonModule,
    CardFormModule,
    SignModule,
    PanelModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
