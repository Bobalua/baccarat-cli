import Card from "./card";
import Deck from "./deck";
import { CardRanks, CardRankToScore, CardSuits } from "./config";

export default class Shoe implements Deck {
  public cards: Card[] = [];

  constructor() {
    // Build the Shoe
    for (let d = 0; d < 4; d++) {
      this.cards = this.cards.concat(
        CardSuits.flatMap((suit) =>
          CardRanks.map((rank) => {
            return { suit, rank, score: CardRankToScore[rank] };
          })
        )
      );
    }
  }

  shuffle() {
    // Shuffle in place
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [
        this.cards[j],
        this.cards[i],
      ];
    }
  }

  // Deal and throw an error if the deck is empty
  deal(): Card {
    const card = this.cards.pop();

    if (!card) {
      throw new Error("Dealt from an empty deck!!");
    }

    return card;
  }
}
