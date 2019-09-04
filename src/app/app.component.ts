import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [] // AccountsService is provided by the app.module
})
export class AppComponent {
  title = 'angular-app';

  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }


  // ASSIGNMENT4
  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];


  // onIntervalFired(firedNumber: number) {
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber);
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //   }
  // }


  // DIRECTIVES DEEP DIVE
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4]

  onlyOdd = false;
  value = 10;



  // ============ SERVICES ============

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }




//  =========== SERVICES ASSIGNMENT ===========
// activeUsers = ['Max', 'Anna'];
// inactiveUsers = ['Chris', 'Manu'];

// onSetToInactive(id: number) {
//   this.inactiveUsers.push(this.activeUsers[id]);
//   this.activeUsers.splice(id, 1);
// }

// onSetToActive(id: number) {
//   this.activeUsers.push(this.inactiveUsers[id]);
//   this.inactiveUsers.splice(id, 1);
// }






}
