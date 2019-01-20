import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradeFormComponent} from './card-form/trade-form.component';
import {UtilModule} from '../util/util.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  CodeHighlighterModule,
  DialogModule,
  DropdownModule,
  InputTextModule,
  KeyFilterModule,
  PanelModule,
  TabViewModule
} from "primeng/primeng";

import {NgxVcardModule} from 'ngx-vcard';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    FontAwesomeModule,
    DropdownModule,
    CardModule,
    DialogModule,
    PanelModule,
    OrderModule,
    KeyFilterModule,
    NgxVcardModule,
    BrowserAnimationsModule
  ],
  declarations: [TradeFormComponent],
  exports: [TradeFormComponent],
  entryComponents: [TradeFormComponent]
})
export class CardFormModule {
}
