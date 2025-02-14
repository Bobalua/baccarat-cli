import AvailableBet from "./availableBet";
import Card from "./card";
import { AvailableBets } from "./config";

export default class Bookie {
  public purse: number = 100;

  private currentBets: Map<AvailableBet, number> = new Map();

  placeBet(bet: AvailableBet, amount: number) {
    if (amount == 0) {
      return;
    }
    if (amount > this.purse) {
      return;
    }

    this.currentBets.set(bet, (this.currentBets.get(bet) || 0) + amount);
    this.purse -= amount;
  }

  getBet(bet: AvailableBet): number {
    return this.currentBets.get(bet) || 0;
  }  

  resolveBets(bankerHand: Card[], playerHand: Card[]) {
    this.currentBets.forEach((betAmount, betType) => {
      const bet = AvailableBets.find(bet => bet.name === betType.name);

      if (bet && bet.validator(bankerHand, playerHand)) {
        const [multiplier, base] = bet.payout;
        const payout = betAmount * (multiplier / base);

        this.purse += payout;
      }
    })
  }
    
  bankruptCheck() {
    return this.purse >= 0;
  }

  private clearBets() {
    this.currentBets.clear();
  }
}