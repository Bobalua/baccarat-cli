import AvailableBet from "./availableBet";
import Card, { CardRank, CardSuit } from "./card";

export const CardSuits = [
    CardSuit.Hearts,
    CardSuit.Diamonds,
    CardSuit.Clubs,
    CardSuit.Spades,
]

export const CardRanks = [
    CardRank.Ace,
    CardRank.Two,
    CardRank.Three,
    CardRank.Four,
    CardRank.Five,
    CardRank.Six,
    CardRank.Seven,
    CardRank.Eight,
    CardRank.Nine,
    CardRank.Ten,
    CardRank.Jack,
    CardRank.Queen,
    CardRank.King
];

export const CardRankToScore = {
    [CardRank.Ace]: 1,
    [CardRank.Two]: 2,
    [CardRank.Three]: 3,
    [CardRank.Four]: 4,
    [CardRank.Five]: 5,
    [CardRank.Six]: 6,
    [CardRank.Seven]: 7,
    [CardRank.Eight]: 8,
    [CardRank.Nine]: 9,
    [CardRank.Ten]: 10,
    [CardRank.Jack]: 10,
    [CardRank.Queen]: 10,
    [CardRank.King]: 10
}

export const AvailableBets: AvailableBet[] = [
  {
    // Provide a name
    name: 'Ride the Dragon',
    // Give it a description
    description: 'Bet that the Dragon will appear 3 times in a row',
    // Provide the payout (in this case 40:1)
    payout: [ 40, 1 ],
    // Provide a validator function, it will look at the banker and player hands and return true if the bet is won
    validator: (bankerHand: Card[], playerHand: Card[]): boolean => {
        if (bankerHand.length == 3 && playerHand.length == 3) {
            if (bankerHand[0].rank == CardRank.King && bankerHand[1].rank == CardRank.King && bankerHand[2].rank == CardRank.King) {
                if (playerHand[0].rank == CardRank.Queen && playerHand[1].rank == CardRank.Queen && playerHand[2].rank == CardRank.Queen) {
                    return true;
                }
            }
        }
        return false;
    },
  }
]