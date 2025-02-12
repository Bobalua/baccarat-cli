import { Shoe } from "./shoe";
import { Card } from "./types";

function displayCard(card: Card) {
    return `${card.rank}${card.suit}`;
}

const shoe = new Shoe();
shoe.shuffle();

const playerHand: Card[] = [];
const bankerHand: Card[] = [];

function dealHand() {
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
};


function logCard(card: Card) {
    console.log('  ', displayCard(card));
}

// console.log('Player Hand: ');
const playerHandScore = (playerHand[0].score + playerHand[1].score) % 10;
// playerHand.forEach(logCard);
// console.log('  ', playerHandScore); // debug

// console.log('Banker Hand: ');
const bankerHandScore = (bankerHand[0].score + bankerHand[1].score) % 10;
// bankerHand.forEach(logCard);
// console.log('  ', bankerHandScore); //debug

// TODO ensure player has two cards and a score when this function is called.
// player draw function deals a third card based on current score.  If score is 8 or 9, no cards are dealt.
// if the score is 6 or 7, player does not get a third card. If the score is 0-5, the player will get a third card.
// Return final player score.  If the player has no cards, the dealHand function will be called.

function playerThirdCardDraw(playerHand: Card[]) {
    // final score after possible third cards will be put into 'playerFinalScore]' variable
    // if player has an 8 or 9, it is a natural and they do not receive a third card. final score is returned.
    if (playerHandScore == 8 || playerHandScore == 9) {
        console.log(`Player has a natural ${playerHandScore}.`);
        return playerHandScore;
    // if player has 6 or 7, they do not receive a third card.  final score is returned.
    } else if (bankerHandScore == 8 || bankerHandScore == 9) {
        return playerHandScore;
    } else if (playerHandScore == 6 || playerHandScore == 7) {
        console.log(`Player stands with ${playerHandScore}.`);
        return playerHandScore;
    // if player score is 0-5, they are given a third card.
    } else if (playerHandScore < 6) {
        playerHand.push(
            shoe.deal()
        );
        // playerHand.forEach(logCard);
        return (playerHand[0].score + playerHand[1].score + playerHand[2].score) % 10;
    } else {
        dealHand();
    } 
};

function bankerDraw(bankerHand: Card[]) {
    
    // if the player had a natural 8 or 9, no third cards are drawn.  bankerHandScore = bankerFinalScore. 
    if (playerHandScore == 8 || playerHandScore == 9) {
    //  bankerFinalScore is returned.
        return bankerHandScore;
    // if the banker has a natural 8 or 9, no third cards are dealt
    } else if (bankerHandScore == 8 || bankerHandScore == 9) {
        console.log(`Banker has a natural ${bankerHandScore}.`);
        return bankerHandScore;
    } else if (bankerHandScore < 3) {
        // if banker hand is 0, 1 or 2 they draw a third card.
        bankerHand.push(
            shoe.deal()
        );
        (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
        // console.log('Banker Hand: ');
        // bankerHand.forEach(logCard);
        // console.log('  ', bankerFinalScore);
        return (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
    // if banker hand is 3.....
    } else if (bankerHandScore == 3){
        // and player 3rd card is an 8, banker stands
        if (playerHand[2].score == 8) {
            return bankerHandScore;
        } else {
            // and player 3rd card is anything other than an 8, banker draws a third card
            bankerHand.push(
                shoe.deal()
            );
            // bankerHand.forEach(logCard);
            return (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
        };
    // if banker hand is 4......
    } else if (bankerHandScore == 4) {
        // and player third card is NOT an 8 or 9, banker draws a third card
        if (playerHand[2].score != 8 && playerHand[2].score != 9) {
            bankerHand.push(
                shoe.deal()
            );
            // bankerHand.forEach(logCard);
            return (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
        } else {
            return bankerHandScore;
        };
    // if banker hand is 5, and player third card is a 4-7, banker draws a third card
    } else if (bankerHandScore == 5) {
        if (playerHand[2].score == 4 ||
            playerHand[2].score == 5 ||
            playerHand[2].score == 6 ||
            playerHand[2].score == 7
        ) {
            bankerHand.push(
                shoe.deal()
            );           
            // bankerHand.forEach(logCard);
            return (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;     
        } else {
           
            return bankerHandScore;
        };
    // if banker hand is 6, and player third card is a 6 or 7, banker draws a third card
    } else if (bankerHandScore == 6) {
        if (playerHand[2].score == 6 || playerHand[2].score == 7) {
            bankerHand.push(
                shoe.deal()
            );           
            // bankerHand.forEach(logCard);
            return (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;       
        } else {           
            return bankerHandScore;
        };
    // banker stands on 7
    } else if (bankerHandScore == 7) {   
            return bankerHandScore;
    };
};

//TODO this needs to be slightly altered to accomodate player and banker score variables that 
//      still need to be implemented.
function declareWinner(playerFinal: number , bankerFinal: number) {
    if (playerFinal == bankerFinal) {
        console.log('Banker and Player Tie!');
        return 'tie';
    } else if (playerFinal - bankerFinal > 0) {
        console.log('Player Wins!');
        return 'player win';
    } else if (playerFinal - bankerFinal < 0) {
        console.log('Banker Wins!');
        return 'banker win';
    }
};

let playerFinalScore = playerThirdCardDraw(playerHand);
let bankerFinalScore = bankerDraw(bankerHand);

console.log('Player Hand: ');
playerHand.forEach(logCard);
console.log('Banker Hand: ');
bankerHand.forEach(logCard);

declareWinner(playerFinalScore, bankerFinalScore);

// TODO use switch / case to determine payouts.





// playerDraw(playerHand);
// bankerDraw(bankerHand);



