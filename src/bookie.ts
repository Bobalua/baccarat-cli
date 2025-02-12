import AvailableBet from "./availableBet";
import Card from "./card";
import { AvailableBets } from "./config";

export default class Bookie {
  public purse: number = 0;

  private currentBets: Map<AvailableBet, number> = new Map();

  PlaceBet(bet: AvailableBet, amount: number) {
    this.currentBets.set(bet, (this.currentBets.get(bet) || 0))
  }

  getBet(bet: AvailableBet): number {
    return this.currentBets.get(bet) || 0;
  }  

  private resolveBets(bankerHand: Card[], playerHand: Card[]) {
    this.currentBets.forEach((betAmount, betType) => {
      const bet = AvailableBets.find (bet => bet.name === betType.name);

      if (bet && bet.validator(bankerHand, playerHand)) {
        const [multiplier, base] = bet.payout;
        const payout = betAmount * (multiplier / base);

        this.purse += payout;
      }
    })
  }
    
  

  private clearBets() {
    this.currentBets.clear();
  }
}