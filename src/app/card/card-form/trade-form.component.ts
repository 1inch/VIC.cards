import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {MerkleTree} from "../../util/merkle-tree";

import {VCard} from 'ngx-vcard';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

library.add(fas, far, fab);

declare let require: any;

const QRCode = require('qrcode');

const vicArtifacts = require('../../util/VicABI.json');
const {VCardFormatter} = require('ngx-vcard/esm5/lib/ngx-vcard.formatter');

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TradeFormComponent implements OnInit {

  loading = false;

  vicSmartContractAddress = '0x98aF9e16cb231b4556D451eE08ba8A42f9908b7d';
  URL_PREFIX = 'https://vic.cards/#/sign/';

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

  QRCodes = [];
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

  async generate(amount: number = 8) {

    this.loading = true;

    let privateKeys = Array.from(Array(amount).keys())
      .map(_ => this.web3Service.web3.eth.accounts.create());

    let accounts = privateKeys.map(pk => pk.address);

    let merkleTree = new MerkleTree(accounts);

    privateKeys = merkleTree.elements.map(el => privateKeys.find(pk => el == pk.address));

    console.log('pk accounts', privateKeys.map(pk => pk.address));

    // console.log(privateKeys);
    // console.log(merkleTree);

    await this.storeMerkleTree(merkleTree);
    let vCards = await this.generateVCards(amount, privateKeys.map(pk => pk.privateKey), merkleTree);
    this.QRCodes = (await this.generateQRCodes(vCards)).map( qr => {
      return {
        qr: qr, index: null
      }
    });

    for (let i = 0; i < accounts.length; i++) {
      this.QRCodes[i].index = MerkleTree.applyProof(accounts[i], merkleTree.getHexProof(i)).index;
    }

    setTimeout(this.generatePDF, 300);

    this.loading = false;
  }

  async storeMerkleTree(merkleTree: MerkleTree) {

    const vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);

    // console.log(this.web3Service.web3.eth.accounts.getAccount);

    console.log('Root', merkleTree.getHexRoot());
    console.log('Layers', merkleTree.layers);

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
        url: this.URL_PREFIX + privateKey.substr(2) + '/' + proof + '/' + this.vCard.workEmail
          // .toString()
          // .replace(/,/g, '')
          // .replace(/0x/g, '')
      };

      return VCardFormatter.getVCardAsString(vCard);
    });

    console.log('VCards', vCards);
    return vCards;
  }

  private async generateQRCodes(vCards: any) {

    let QRCodes = await Promise.all(vCards.map( value =>  QRCode.toDataURL(value)));

    console.log('QRCodes', QRCodes);

    return QRCodes;
  }

  public generatePDF() {

    let data = document.getElementById('contentToConvert');

    console.log('Data:', data);

    html2canvas(data).then(canvas => {

      console.log('Canvas:', canvas);

      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
}
