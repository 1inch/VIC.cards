import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {MerkleTree} from "../../util/merkle-tree";

library.add(fas, far, fab);

declare let require: any;

const vicArtifacts = require('./VicABI.json');

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.css']
})
export class TradeFormComponent implements OnInit {

  loading = false;

  vicSmartContractAddress = '0x';

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
    private web3Service: Web3Service
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

  async generate(amount: number = 16) {

    this.loading = true;

    let privateKeys = Array.from(Array(amount).keys())
      .map(_ => this.web3Service.web3.eth.accounts.create());

    let merkleTree = new MerkleTree(
      privateKeys.map(pk => pk.address)
    );

    console.log(privateKeys);
    console.log(merkleTree);

    this.storeMerkleTree(merkleTree);

    this.loading = false;
  }

  async storeMerkleTree(merkleTree: MerkleTree) {

    const vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);

    const result = await vicContract.methods
      .publish(merkleTree.getHexRoot(), merkleTree.elements.length)
      .send();

    console.log('Call result', result);
  }
}
