import { Suit, Rank } from "./types"

export const Suits = [
    Suit.Hearts,
    Suit.Diamonds,
    Suit.Clubs,
    Suit.Spades,
]

export const Ranks = [
    Rank.Ace,
    Rank.Two,
    Rank.Three,
    Rank.Four,
    Rank.Five,
    Rank.Six,
    Rank.Seven,
    Rank.Eight,
    Rank.Nine,
    Rank.Ten,
    Rank.Jack,
    Rank.Queen,
    Rank.King
];

export const RankToScore = {
    [Rank.Ace]: 1,
    [Rank.Two]: 2,
    [Rank.Three]: 3,
    [Rank.Four]: 4,
    [Rank.Five]: 5,
    [Rank.Six]: 6,
    [Rank.Seven]: 7,
    [Rank.Eight]: 8,
    [Rank.Nine]: 9,
    [Rank.Ten]: 10,
    [Rank.Jack]: 10,
    [Rank.Queen]: 10,
    [Rank.King]: 10
}