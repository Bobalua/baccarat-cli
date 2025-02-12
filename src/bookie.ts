import AvailableBet from "./availableBet";

export default class Bookie {
  public purse: number = 0;

  private currentBets: Map<AvailableBet, number> = new Map();

  Bet(bet: AvailableBet, amount: number) {
    // ??
  }

  private resolveBets() {
    
  }
}