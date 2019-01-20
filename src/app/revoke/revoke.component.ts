import {Web3Service} from '../util/web3.service';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

library.add(fas, far, fab);

declare let require: any;

const vicArtifacts = require('./VicABI.json');

@Component({
  selector: 'app-revoke',
  templateUrl: './revoke.component.html',
  styleUrls: ['./revoke.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RevokeComponent implements OnInit {

  loading = false;
  account = null;
  selectedIndex = 0;
  selectedEvent = 0;
  indexes = [
    {
      label: "1",
      value: 0
    }, {
      label: "2",
      value: 1
    }, {
      label: "3",
      value: 2
    }, {
      label: "4",
      value: 3
    }, {
      label: "5",
      value: 4
    }, {
      label: "6",
      value: 5
    }, {
      label: "7",
      value: 6
    }, {
      label: "8",
      value: 7
    },
  ];

  eventBlocks = [];
  events = [];
  accounts = [];

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

    this.watchAccount();

    // console.log(this);
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

      this.parseEvents();
    });
  }

  async parseEvents() {

    let scope = this;

    if (!this.web3Service.ready) {
      return setTimeout(function () {
        scope.parseEvents();
      }, 100);
    }

    const vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);

    this.events = await vicContract.getPastEvents('CardsAdded', {
      filter: {user: this.account},
      fromBlock: 7094907,
      toBlock: 'latest'
    });

    this.eventBlocks = (await Promise.all(
        this.events.map(event => this.web3Service.web3.eth.getBlock(event.blockNumber)))
    )
      .map((obj, index) => {
        return {
          label: (new Date(obj['timestamp'] * 1000)).toUTCString(),
          value: index
        }
      });

    console.log(this.eventBlocks);

    // this.status = 'Signature verified! ID: ' + (index + 1) + ', Date: ' + (new Date(timestamp * 1000)).toUTCString();
    // console.log('Event', events[0]);
  }

  async revoke() {

    const vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);

    console.log('Events', this.events);
    console.log('Selected Event', this.events[this.selectedEvent]);
    console.log('Root', this.events[this.selectedEvent].returnValues.root);

    let kickEvents = await vicContract.getPastEvents('CardCompromised', {
      filter: {root: this.events[this.selectedEvent].returnValues.root, index: this.selectedIndex},
      fromBlock: 7094907,
      toBlock: 'latest'
    });

    console.log('Kick events', kickEvents);

    if (kickEvents.length) {
      let status = 'This VIC card was already revoked!';
      alert(status);
      return;
    }

    await vicContract.methods
      .report(this.events[this.selectedEvent].returnValues.root, this.selectedIndex)
      .send({
        from: this.account
      });

    alert('VIC card is now revoked!');
  }
}
