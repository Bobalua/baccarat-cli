
// TODO add the shuffle functionality

// this is a simple array that represents a single deck.  
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
const cardVal = {
    'K': 10,
    'Q': 10,
    'J': 10,
    'A': 1
}

// using the splat spread operator to merge multiple arrays into one array called 'shoe'
const shoe = [...deck, ...deck, ...deck, ...deck];

let card = deck[2];

// if the card has a key value pair in cardVal, it will use that value.  If not, it will use the default
        // numerical value for the card
let cardScore = cardVal[card] || card;

console.log(card + " - " + cardScore);


