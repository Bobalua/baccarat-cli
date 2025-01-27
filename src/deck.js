

// this is a simple array that represents a single deck.  
// TODO  change array to all integers.
const deck = [
    'A', 'A', 'A', 'A', 
    2, 2, 2, 2, 
    3, 3, 3, 3, 
    4, 4, 4, 4, 
    5, 5, 5, 5, 
    6, 6, 6, 6, 
    7, 7, 7, 7, 
    8, 8, 8, 8, 
    9, 9, 9, 9, 
    10, 10, 10, 10,
    'J', 'J', 'J', 'J', 
    'Q', 'Q', 'Q', 'Q', 
    'K', 'K', 'K', 'K'
];

// This equates a numerical value with the strings that represent
//      face cards and aces.
// TODO change const name.  
// TODO change key value pairs to reflect new deck array
const cardVal = {
    'K': 10,
    'Q': 10,
    'J': 10,
    'A': 1
}

// using the splat spread operator to merge multiple arrays into one array called 'shoe'
const shoe = [...deck, ...deck, ...deck, ...deck];

// if the card has a key value pair in cardVal, it will use that value.  If not, it will use the 
        // numerical value of the card
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

// console.log(playerHand);    // debug
// console.log(bankerHand);    // debug

// player gross score is calculated by adding the value of the two cards.
// It will first check to see a card has a defined value in the cardVal object.
// if that value exists, that is the value used.
// if not, it will use the integer value of the card.
let playerScore = (cardVal[playerHand[0]] || playerHand[0]) + (cardVal[playerHand[1]] || playerHand[1]);

console.log(playerHand); //debug

// this will drop the first digit of a two digit score.
if (playerScore > 9) {
    playerScore = JSON.parse(playerScore.toString().slice(1));
};

console.log(playerHand); //debug

console.log(playerScore); //debug

// TODO add player scoring logic
// TODO add banker scoring logic (dependent on player scoring)
// TODO figure out UI for user interactions (purse, betting amt, what to bet on, etc.)
// TODO create game loop
// TODO (possible) arrange deck.js into either a class or a series of export functions
