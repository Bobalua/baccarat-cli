// this is a simple array that represents a single deck.  
// const cardId = [
//     1, 1, 1, 1,  
//     2, 2, 2, 2, 
//     3, 3, 3, 3, 
//     4, 4, 4, 4, 
//     5, 5, 5, 5, 
//     6, 6, 6, 6, 
//     7, 7, 7, 7, 
//     8, 8, 8, 8, 
//     9, 9, 9, 9, 
//     10, 10, 10, 10,
//     11, 11, 11, 11, 
//     12, 12, 12, 12, 
//     13, 13, 13, 13
// ];

// function displayCard(cardId) {
//     switch(cardId) {
//         case 1:
//             return 'A';
//         case 2:
//             return '2';
//         case 3:
//             return '3';
//         case 4:
//             return '4';
//         case 5:
//             return '5';
//         case 6:
//             return '6';
//         case 7:
//             return '7';
//         case 8:
//             return '8';
//         case 9:
//             return '9';
//         case 10:
//             return '10';
//         case 11:
//             return 'J';
//         case 12:
//             return 'Q';
//         case 13:
//             return 'K';    
//     }
// }

// This equates a numerical value with the strings that represent
//      face cards and aces.


// const faceCardScore = {
//     'K': 10,
//     'Q': 10,
//     'J': 10,
//     'A': 1
// }

// player gross score is calculated by adding the value of the two cards.
// It will first check to see a card has a defined value in the cardVal object.
// if that value exists, that is the value used.
// if not, it will use the integer value of the card.

// let playerScore = (faceCardScore[playerHand[0]] || playerHand[0]) + (faceCardScore[playerHand[1]] || playerHand[1]);