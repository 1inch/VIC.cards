import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {SignComponent} from "./sign.component";

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
    KeyFilterModule,
    NgxVcardModule
  ],
  declarations: [SignComponent],
  exports: [SignComponent],
  entryComponents: [SignComponent]
})
export class SignModule {
}
