import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {MerkleTree} from "../../util/merkle-tree";

import { VCard } from 'ngx-vcard';

library.add(fas, far, fab);

declare let require: any;

const vicArtifacts = require('./VicABI.json');
const {VCardFormatter} = require('ngx-vcard/esm5/lib/ngx-vcard.formatter');

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.css']
})
export class TradeFormComponent implements OnInit {

  loading = false;

  vicSmartContractAddress = '0xd321d87758e588438a5c3da5a6f1db076cd6c551';
  URL_PREFIX = 'https://vic.cards/sign/';

  vCard = {
    name: {
      firstNames: '',
      lastNames: ''
    },
    organization: '',
    telephone: '',
    workEmail: '',
    title: ''
  };

  accounts = [];
  account = null;

  constructor(
    private web3Service: Web3Service
  ) {
    // console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    // console.log('OnInit: ' + this.web3Service);

    this.watchAccount();

    // console.log(this);
  }

  resetVCard() {

    this.vCard = {
      name: {
        firstNames: '',
        lastNames: ''
      },
      organization: '',
      telephone: '',
      workEmail: '',
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

    // console.log(privateKeys);
    // console.log(merkleTree);

   // await this.storeMerkleTree(merkleTree);
    await this.generateVCards(amount, privateKeys.map(pk => pk.privateKey), merkleTree);
    // this.generateQRCodes();

    this.loading = false;
  }

  async storeMerkleTree(merkleTree: MerkleTree) {

    const vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);

    console.log(this.web3Service.web3.eth.accounts.getAccount);

    await vicContract.methods
      .publish(merkleTree.getHexRoot(), merkleTree.elements.length)
      .send({
        from: this.account
      });
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {

      console.log('Accounts: ', accounts);

      this.accounts = [];

      for (let i = 0; i < accounts.length; i++) {
        this.accounts.push({
          label: accounts[i],
          value: accounts[i],
        });
      }

      // console.log('Accounts', this.accounts);

      this.account = accounts[0];
    });
  }

  private generateVCards(amount: number, privateKeys: Array<string>, merkleTree: MerkleTree) {

    let vCards = privateKeys.map( (privateKey, index) => {

      let proof = merkleTree.getHexProof(index);

      let vCard: VCard = {
        name: {
          firstNames: this.vCard.name.firstNames,
          lastNames: this.vCard.name.lastNames
        },
        organization: this.vCard.organization,
        telephone: this.vCard.telephone ? [
          this.vCard.telephone
        ] : undefined,
        workEmail: this.vCard.workEmail ? [
          this.vCard.workEmail
        ] : undefined,
        title: this.vCard.title,
        url: this.URL_PREFIX + privateKey + '/' + proof
      };

      return VCardFormatter.getVCardAsString(vCard);
    });

    console.log('Cards', vCards);
  }
}
