import Shoe from "./shoe";

export default class Dealer {
  public shoe: Shoe;

  constructor() {
    this.shoe = new Shoe();
  }

  shuffle() {
    this.shoe.shuffle();
  }

  deal() {
    return this.shoe.deal();
  }
}