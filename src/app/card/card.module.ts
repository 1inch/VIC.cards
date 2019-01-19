import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradeFormComponent} from './card-form/trade-form.component';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    UtilModule,
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
  ],
  declarations: [TradeFormComponent],
  exports: [TradeFormComponent]
})
export class CardModule {
}
