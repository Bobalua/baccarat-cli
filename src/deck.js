
// TODO add the shuffle functionality
// Figure out how to equate strings to values (should be easy)

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
// this was an attempt to equate numerical value.  Did not work as written
const cardValue = {
    'A' = 1,
    'J' = 10,
    'Q' = 10,
    'K' = 10
};

console.log(deck[46]);