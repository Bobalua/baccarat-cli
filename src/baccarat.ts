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

  doesPlayerDrawThirdCard() {
    // ?
  }

  doesBankerDrawThirdCard() {
    // ?
  }
}