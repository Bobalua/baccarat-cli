import AvailableBet from "./availableBet";
import Card from "./card";

export default class Baccarat {
  // TODO: Pick a better type for time
  private time: number = 0;

  private bankerHand: Card[];
  private playerHand: Card[];

  addHandEndListener(listener: (bankerHand: Card[], playerHand: Card[]) => void) {
    // Google or gpt, how to create a typescript event emitter for both this and hand start listener
    throw new Error("Method not implemented.");
  }

  addHandStartListener(listener: (availableBets: AvailableBet[]) => void) {
    throw new Error("Method not implemented.");
  }
}