export interface Card {
    suit: Suit;
    rank: Rank;
    score: number;
}

export enum Suit {
    Hearts = '♥',
    Diamonds = '♦',
    Spades = '♠',
    Clubs = '♣',
}

export enum Rank {
    Ace   = "A",
    Two   = "2",
    Three = "3",
    Four  = "4",
    Five  = "5",
    Six   = "6",
    Seven = "7",
    Eight = "8",
    Nine  = "9",
    Ten   = "10",
    Jack  = "J",
    Queen = "Q",
    King  = "K"
}
