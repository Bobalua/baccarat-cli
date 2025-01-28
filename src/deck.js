





function makeCard(display, score) {
    return {display, score};
}

const deck = [
    makeCard('A♥', 1),
    makeCard('A♦', 1),
    makeCard('A♠', 1),
    makeCard('A♣', 1),
    makeCard('2♥', 2),
    makeCard('2♦', 2),
    makeCard('2♠', 2),
    makeCard('2♣', 2),
    makeCard('3♥', 3),
    makeCard('3♦', 3),
    makeCard('3♠', 3),
    makeCard('3♣', 3),
    makeCard('4♥', 4),
    makeCard('4♦', 4),
    makeCard('4♠', 4),
    makeCard('4♣', 4),
    makeCard('5♥', 5),
    makeCard('5♦', 5),
    makeCard('5♠', 5),
    makeCard('5♣', 5),
    makeCard('6♥', 6),
    makeCard('6♦', 6),
    makeCard('6♠', 6),
    makeCard('6♣', 6),
    makeCard('7♥', 7),
    makeCard('7♦', 7),
    makeCard('7♠', 7),
    makeCard('7♣', 7),
    makeCard('8♥', 8),
    makeCard('8♦', 8),
    makeCard('8♠', 8),
    makeCard('8♣', 8),
    makeCard('9♥', 9),
    makeCard('9♦', 9),
    makeCard('9♠', 9),
    makeCard('9♣', 9),
    makeCard('10♥', 10),
    makeCard('10♦', 10),
    makeCard('10♠', 10),
    makeCard('10♣', 10),
    makeCard('J♥', 10),
    makeCard('J♦', 10),
    makeCard('J♠', 10),
    makeCard('J♣', 10),
    makeCard('Q♥', 10),
    makeCard('Q♦', 10),
    makeCard('Q♠', 10),
    makeCard('Q♣', 10),
    makeCard('K♥', 10),
    makeCard('K♦', 10),
    makeCard('K♠', 10),
    makeCard('K♣', 10)
];

// console.log(deck[50].score); //debug
// console.log(deck[50].display); //debug

// using the splat spread operator to merge multiple arrays into one array called 'shoe'
const shoe = [...deck, ...deck, ...deck, ...deck];

// console.log(shoe);


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const shuffledShoe = shuffle(shoe);

// console.log(shuffledShoe);  //debug

const playerHand = [];
const bankerHand = [];

// dealing cards from shuffled array.  If there is at least six cards, hands are dealt. called as a method.
function deal() {
    if (shuffledShoe.length > 6) {
        playerHand.push(shuffledShoe.pop(1));
        bankerHand.push(shuffledShoe.pop(1));
        playerHand.push(shuffledShoe.pop(1));
        bankerHand.push(shuffledShoe.pop(1));
    } else {
        shuffle(shoe);
    };
};

deal();

console.log(playerHand);    // debug
console.log(bankerHand);    // debug

let playerScore = (playerHand[0].score) + (playerHand[1].score);
if (playerScore > 9) {
    playerScore = JSON.parse(playerScore.toString().slice(1));
};
// // console.log(playerHand); //debug

let bankerScore = (bankerHand[0].score) + (bankerHand[1].score);
if (bankerScore > 9) {
    bankerScore = JSON.parse(bankerScore.toString().slice(1));
};

console.log(playerScore); // debug
console.log(bankerScore); // debug
// // this will drop the first digit of a two digit score.


console.log(playerHand[0].display + " " + playerHand[1].display); // debug
console.log(playerScore); //debug
console.log(bankerHand[0].display + " " + bankerHand[1].display); // debug
console.log(bankerScore); //debug

// TODO add player scoring logic
// TODO add banker scoring logic (dependent on player scoring)
// TODO figure out UI for user interactions (purse, betting amt, what to bet on, etc.)
// TODO create game loop
// TODO (possible) arrange deck.js into either a class or a series of export functions
// TODO declare winner and resolve bets
