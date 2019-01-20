import {Web3Service} from '../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MerkleTree} from "../util/merkle-tree";

library.add(fas, far, fab);

declare let require: any;

const vicArtifacts = require('../util/VicABI.json');

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignComponent implements OnInit {

  privateKey = '';
  proof = [];
  loading = false;
  account = null;
  accounts = [];
  status = 'Waiting...';
  url = '';
  email = '';

  vicSmartContractAddress = '0x98aF9e16cb231b4556D451eE08ba8A42f9908b7d';
  randomMessage = '';
  signature = '';

  URL_PREFIX = 'https://vic.cards/#/verify/';

  constructor(
    private web3Service: Web3Service,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    // console.log('OnInit: ' + this.web3Service);

    this.privateKey = '0x' + this.route.snapshot.paramMap.get('privateKey');
    this.proof = this.route.snapshot.paramMap.get('proof').split(',');
    this.email = this.route.snapshot.paramMap.get('email');

    console.log('Private Key', this.privateKey);
    console.log('Proof', this.proof);

    console.log('Web3', this.web3Service);

    this.parseEvents();

    // console.log(this);
  }

  async parseEvents() {

    let scope = this;

    if (!this.web3Service.ready) {
      return setTimeout(function () {
        scope.parseEvents();
      }, 100);
    }

    let account = this.web3Service.web3.eth.accounts.privateKeyToAccount(this.privateKey);

    let {root, index} = MerkleTree.applyProof(account.address, this.proof);

    console.log('Account', account);

    console.log('Root', root);
    console.log('Index', index);

    const vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);

    let events = await vicContract.getPastEvents('CardsAdded', {
      filter: {root: root},
      fromBlock: 7094907,
      toBlock: 'latest'
    });

    if (!events.length) {
      this.status = 'Invalid VIC code!';
      alert(this.status);
      return;
    }

    console.log('Events', events);
    console.log('Event', events[0].returnValues.user);
    console.log('Index', index);

    let kickEvents = await vicContract.getPastEvents('CardCompromised', {
      filter: {user: events[0].returnValues.user, root: root, index: index},
      fromBlock: 7094907,
      toBlock: 'latest'
    });

    console.log('Kick events', kickEvents);

    if (kickEvents.length) {
      this.status = 'Your VIC card was revoked!';
      alert(this.status);
      return;
    }

    this.randomMessage = this.web3Service.web3.eth.accounts.create().privateKey;
    let signatureObject = account.sign(
      this.randomMessage
    );

    let signature = signatureObject.signature;

    console.log('Signature', signature);

    this.url = this.URL_PREFIX + signatureObject.messageHash + '/' + signature + '/' + this.proof;
    this.status = 'Signature created!';
  }

  sendEMail() {
    window.location.href = 'mailto:' + this.email + '?body=' + "%0D%0A%0D%0A:::::: VIC SIGNATURE ::::::%0D%0A%0D%0A" + this.url;
  }
}
