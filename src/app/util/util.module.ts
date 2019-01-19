import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Web3Service} from './web3.service';
import {MerkleTreeService} from "./merkle-tree.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    Web3Service,
    MerkleTreeService
  ],
  declarations: []
})
export class UtilModule {
}
