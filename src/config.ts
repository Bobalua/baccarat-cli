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
  },
  {
    // if player wins, validator returns true
    name: 'Player Win',
    description: 'Players hand beats bankers hand',
    payout: [ 1, 1 ],
    validator: (bankerHand: Card[], playerHand: Card[]): boolean => {
        if ((playerHand[0].score + playerHand[1].score + playerHand[2].score || 0) % 10 >
           (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score || 0) % 10) {
            return true;
        }
        return false;
    },
   },
   {
    // if banker wins, validator returns true.  payout takes into account a 5% house cut
    name: 'Banker Win',
    description: 'Bankers hand beats players hand',
    payout: [.95, 1],
    validator: (bankerHand: Card[], playerHand: Card[]): boolean => {
        if ((playerHand[0].score + playerHand[1].score + playerHand[2].score || 0) % 10 <
           (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score || 0) % 10) {
            return true;
        }
        return false;
   },
  },
  {
    // if player and banker have the same score, payout is 8:1
    name: 'Tie',
    description: 'Player and banker have the same final score',
    payout: [8, 1],
    validator: (bankerHand: Card[], playerHand: Card[]): boolean => {
        if ((playerHand[0].score + playerHand[1].score + playerHand[2].score || 0) % 10 ==
           (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score || 0) % 10) {
            return true;
        }
        return false;
    }
  },
  {
    name: 'Player Pair',
    description: 'Players first two cards are the same rank',
    payout: [5, 1],
    validator: (bankerHand, playerHand) => {
        if (playerHand[0].rank == playerHand[1].rank) {
            return true;
        }
        return false;
    }
  },
  {
    name: 'Banker Pair',
    description: 'Bankers first two cards are the same rank',
    payout: [5, 1],
    validator: (bankerHand, playerHand) => {
        if (bankerHand[0].rank == playerHand[1].rank) {
            return true;
        }
        return false;
    }
  },
  { 
    name: 'Dragon 7',
    description: 'Banker wins with a three card hand worth 7 points',
    payout: [40, 1],
    validator: (bankerHand: Card[], playerHand: Card[]): boolean => {
        // AvailableBets.find searches the array of objects looking for one with the name "banker Win".  
        // That object is put into bankerBet
        const bankerBet = AvailableBets.find(bet => bet.name == 'Banker Win')
        // banker hand must have exactly three cards
        if (bankerHand.length === 3 && 
            // adding all three card scores and dividing by 10, with the remainder being the score
           (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10 === 7 &&
           // 
            bankerBet?.validator(bankerHand, playerHand) == true) {
                return true;
            }
            return false;
    }      
  },
  {
    name: 'Panda 8',
    description: 'Player wins with a three card hand that scores 8',
    payout: [25, 1],
    validator: (bankerHand, playerHand) => {
        const playerBet = AvailableBets.find(bet => bet.name == "Player Win");
        if (playerHand.length == 3 && 
           (playerHand[0].score + playerHand[1].score + playerHand[2].score) % 10 == 8 &&
            playerBet?.validator(bankerHand, playerHand) == true) {
                return true;
            }
            return false;
    }
  }
];