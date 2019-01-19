import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {MerkleTreeService} from "../../util/merkle-tree.service";

library.add(fas, far, fab);

declare let require: any;

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.css']
})
export class TradeFormComponent implements OnInit {

  loading = false;

  vcard = {
    firstName: '',
    middleName: '',
    lastName: '',
    organization: '',
    workPhone: '',
    emailAddress: '',
    title: ''
  };

  constructor(
    private web3Service: Web3Service,
    private merkleTreeService: MerkleTreeService
  ) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
  }

  resetVCard() {
    this.vcard = {
      firstName: '',
      middleName: '',
      lastName: '',
      organization: '',
      workPhone: '',
      emailAddress: '',
      title: ''
    };
  }

  generate(amount:number = 16) {

    this.loading = true;

    let privateKeys = Array.from(Array(amount).keys())
      .map(_ => this.web3Service.web3.eth.accounts.create());

    let merkleTree = this.merkleTreeService.create(privateKeys.map(pk => pk.address));

    console.log(privateKeys);
    console.log(merkleTree);

    this.loading = false;
  }
}
