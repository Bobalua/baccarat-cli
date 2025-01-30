import { Shoe } from "./shoe";
import { Card } from "./types";

function displayCard(card: Card) {
    return `${card.rank}${card.suit}`;
}

const shoe = new Shoe();
shoe.shuffle();

const playerHand: Card[] = [];
const bankerHand: Card[] = [];

playerHand.push(
    shoe.deal()
);
bankerHand.push(
    shoe.deal()
)
playerHand.push(
    shoe.deal()
);
bankerHand.push(
    shoe.deal()
)

function logCard(card: Card) {
    console.log('  ', displayCard(card));
}

console.log('playerHand: ');
const playerHandScore = (playerHand[0].score + playerHand[1].score) % 10;
playerHand.forEach(logCard);
console.log('  ', playerHandScore);

console.log('bankerHand: ');
const bankerHandScore = (bankerHand[0].score + bankerHand[1].score) % 10;
bankerHand.forEach(logCard);
console.log('  ', bankerHandScore);
console.log('ten ' + 10);





