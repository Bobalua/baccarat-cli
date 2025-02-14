import AvailableBet from "./availableBet";
import Card from "./card";
import EventEmitter from "node:events";

export default class Baccarat extends EventEmitter {
  // TODO: Pick a better type for time
  private time: number = 0;
  private bankerHand: Card[];
  private playerHand: Card[];

  constructor() {
    super();
  }

  addHandEndListener(listener: (bankerHand: Card[], playerHand: Card[]) => void) {
    // Google or gpt, how to create a typescript event emitter for both this and hand start listener
    this.on('HandEnd', listener);
    // throw new Error("Method not implemented.");
  }

  addHandStartListener(listener: (availableBets: AvailableBet[]) => void) {
    this.on('HandStart', listener);
    // throw new Error("Method not implemented.");
  }

  // if player will draw a third card, doesPlayerDrawThirdCard returns true
  doesPlayerDrawThirdCard(): boolean {
    if (this.playerHand[0].score + this.playerHand[1].score % 10 > 5) {
      return false;
    }else {
    return true;
  } 
  }; 

  doesBankerDrawThirdCard(): boolean {
    if (this.playerHand[0].score + this.playerHand[1].score % 10 == 8 || 9) {
      return false;
    } else if (this.bankerHand[0].score + this.bankerHand[1].score % 10 == 8 || 9) {
      return false;
    } else if (this.bankerHand[0].score + this.bankerHand[1].score % 10 < 3) {
      return true;
    } else if (this.bankerHand[0].score + this.bankerHand[1].score % 10 == 3) {
      if (this.playerHand[2].score == 8) {
        return false;
      } else {
        return true;
      }
    } else if (this.bankerHand[0].score + this.bankerHand[1].score % 10 == 4) {
      if (this.playerHand[2].score != 8 || this.playerHand[2].score != 9) {
        // TODO finish the draw conditional chain.  playerhand != 9 is throwing a fit.  Need to fix. 
        // Finish banker score is 4 logic and move on to 5....

      }
    }
  }
}