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

const vicArtifacts = require('./VicABI.json');

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

  vicSmartContractAddress = '0xd321d87758e588438a5c3da5a6f1db076cd6c551';

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

    console.log('Private Key', this.privateKey);
    console.log('Proof', this.proof);

    console.log('Web3', this.web3Service);

    this.watchAccount();
    this.getAccount();

    // console.log(this);
  }

  async getAccount() {

    let scope = this;

    if (!this.web3Service.ready) {
      return setTimeout(function () {
        scope.getAccount();
      }, 100);
    }

    let account = this.web3Service.web3.eth.accounts.create(this.privateKey).address;

    let {root, index} = MerkleTree.applyProof(account, this.proof);

    const vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);

    let events = await vicContract.getPastEvents('CardsAdded', {
      filter: {root: root},
      fromBlock: 7094907,
      toBlock: 'latest'
    });

    console.log('Events', events);
  }

  watchAccount() {

    this.web3Service.accountsObservable.subscribe((accounts) => {

      // console.log('Accounts: ', accounts);

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

  sign() {

  }
}
