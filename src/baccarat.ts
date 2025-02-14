import AvailableBet from "./availableBet";
import Card from "./card";
import EventEmitter from "node:events";
import { AvailableBets } from "./config";

export default class Baccarat extends EventEmitter {
  // TODO: Pick a better type for time
  private time: number = 0;
  private bankerHand: Card[] = [];
  private playerHand: Card[] = [];

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
    if ((this.playerHand[0].score + this.playerHand[1].score) % 10 > 5) {
      return false;

    }else {
    return true;
  } 
  }; 

  doesBankerDrawThirdCard(): boolean {
    // player and banker score calculations stored in variables.  player third card stored in variable/
    const playerTotal = (this.playerHand[0].score + this.playerHand[1].score) % 10;
    const bankerTotal = (this.bankerHand[0].score + this.bankerHand[1].score) % 10;
    const playerThirdCard = this.playerHand[2] ? this.playerHand[2].score : -1;

    // if player or banker has a natural 8 or 9, return false
    if ([8, 9].includes(playerTotal) || [8, 9].includes(bankerTotal)) {
      return false;
    }

    // if banker score is 0, 1, or 2, return true
    if (bankerTotal < 3) {
      return true;
    }

    // if banker score is 3 and player third card is an 8, return false 
    // if the player third card is anything other than an 8, return true
    if (bankerTotal === 3) {
      if ( playerThirdCard === 8) {
        return false;
      }
      return true;
    }

    // if banker score is 4 and PTC is 3, 4, 5, or 6, return true
    // if PTC is any other score, return false
    if (bankerTotal === 4) {
      if (playerThirdCard >= 2 && playerThirdCard <= 7) {
        return true;
      }
      return false;
    }

    // if banker score is 5 and PTC is 4-7, return true
    // if PTC is any other score, return false
    if (bankerTotal === 5) {
      if ([4, 5, 6, 7].includes(playerThirdCard)) {
        return true;
      }
      return false;
    }

    // if banker score is 6 and PTC is 6 or 7, return true.  if PTC is any other card, return false
    if (bankerTotal === 6) {
      if ([6, 7].includes(playerThirdCard)) {
        return true;
      }
      return false;
    }

    if (bankerTotal === 7) {
      return false;
    }
  return false;
  }  

  startRound(availableBets: AvailableBet[]) {
    this.emit('HandStart', availableBets);
  }

  endRound(bankerHand: Card[], playerHand: Card[]) {
    this.emit('HandEnd', bankerHand, playerHand);
  }




}

