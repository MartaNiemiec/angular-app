import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Active to inactive: " + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("Inactive to active: " + this.inactiveToActiveCounter);
  }
}
