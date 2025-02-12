import { Card } from "./types";
import { Suits, Ranks, RankToScore } from "../config";

export class Shoe {
    private contents: Card[] = [];

    constructor() {
        // Build the Shoe
        for (let d = 0; d < 4; d++) {
            this.contents = this.contents.concat(
                Suits.flatMap(suit => Ranks.map(rank => {
                    return { suit, rank, score: RankToScore[rank] };
                }))
            );
        }
    }

    shuffle() {
        // Shuffle in place
        for (let i = this.contents.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.contents[i], this.contents[j]] = [this.contents[j], this.contents[i]];
        }
    }

    // Deal and throw an error if the deck is empty
    deal(): Card {
        const card = this.contents.pop();

        if (!card) {
            throw new Error('Dealt from an empty deck!!');
        }

        return card;
    }
}