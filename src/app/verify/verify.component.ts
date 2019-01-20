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
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VerifyComponent implements OnInit {

  messageHash = '';
  signature = '';
  proof = [];
  loading = false;
  account = null;
  accounts = [];
  status = 'Waiting...';
  url = '';

  vicSmartContractAddress = '0x98aF9e16cb231b4556D451eE08ba8A42f9908b7d';

  constructor(
    private web3Service: Web3Service,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    // console.log('OnInit: ' + this.web3Service);

    this.messageHash = this.route.snapshot.paramMap.get('messageHash');
    this.signature = this.route.snapshot.paramMap.get('signature');
    this.proof = this.route.snapshot.paramMap.get('proof').split(',');

    console.log('messageHash', this.messageHash);
    console.log('signature', this.signature);
    console.log('Proof', this.proof);

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

    let account = this.web3Service.web3.eth.accounts.recover({
      messageHash: this.messageHash,
      v: '0x' + this.signature.substr(130),
      r: '0x' + this.signature.substr(2, 64),
      s: '0x' + this.signature.substr(66, 64),
    });
    console.log({
      messageHash: this.messageHash,
      v: '0x' + this.signature.substr(130),
      r: '0x' + this.signature.substr(2, 64),
      s: '0x' + this.signature.substr(66, 64),
    });
    console.log(this.signature);

    let {root, index} = MerkleTree.applyProof(account, this.proof);

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

    let kickEvents = await vicContract.getPastEvents('CardCompromised', {
      filter: {root: root, index: index},
      fromBlock: 7094907,
      toBlock: 'latest'
    });

    console.log('Kick events', kickEvents);

    if (kickEvents.length) {
      this.status = 'This VIC card was already revoked!';
      alert(this.status);
      return;
    }

    let timestamp = (await this.web3Service.web3.eth.getBlock(events[0].blockNumber)).timestamp;

    this.status = 'Signature verified! ID: ' + (index + 1) + ', Date: ' + (new Date(timestamp * 1000)).toUTCString();

    console.log('Event', events[0]);
  }
}
