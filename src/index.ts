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

console.log('Player Hand: ');
const playerHandScore = (playerHand[0].score + playerHand[1].score) % 10;
playerHand.forEach(logCard);
// console.log('  ', playerHandScore); // debug

console.log('Banker Hand: ');
const bankerHandScore = (bankerHand[0].score + bankerHand[1].score) % 10;
bankerHand.forEach(logCard);
// console.log('  ', bankerHandScore); //debug

function playerDraw(playerHand: Card[]) {
    // final score after possible third cards will be put into 'playerFinalScore]' variable
    let playerFinalScore;
    // if player has an 8 or 9, it is a natural and they do not receive a third card. final score is returned.
    if (playerHandScore == 8 || playerHandScore == 9) {
        console.log(`Player has a natural ${playerHandScore}.`);
        playerFinalScore = playerHandScore;
        return playerFinalScore;
    // if player has 6 or 7, they do not receive a third card.  final score is returned.
    } else if (bankerHandScore == 8 || bankerHandScore == 9) {
        playerFinalScore = playerHandScore;
        return playerFinalScore;
    } else if (playerHandScore == 6 || playerHandScore == 7) {
        console.log(`Player stands with ${playerHandScore}.`);
        playerFinalScore = playerHandScore;
        return playerFinalScore;
    // if player score is 0-5, they are given a third card.
    } else if (playerHandScore < 6) {
        playerHand.push(
            shoe.deal()
        );
    // new score is calculated and put in playerFinalScore and that variable is returned.
        playerFinalScore = (playerHand[0].score + playerHand[1].score + playerHand[2].score) % 10;
        console.log('Player Hand: ');
        playerHand.forEach(logCard);
        console.log('  ', playerFinalScore);
        return playerFinalScore;
    };
};

function bankerDraw(bankerHand: Card[]) {
    // score after possible third card will be put into 'bankerFinalScore' variable
    let bankerFinalScore;
    // if the player had a natural 8 or 9, no third cards are drawn.  bankerHandScore = bankerFinalScore. 
    if (playerHandScore == 8 || playerHandScore == 9) {
        bankerFinalScore = bankerHandScore;
    //  bankerFinalScore is returned.
        return bankerFinalScore;
    // if the banker has a natural 8 or 9, no third cards are dealt
    } else if (bankerHandScore == 8 || bankerHandScore == 9) {
        console.log(`Banker has a natural ${bankerHandScore}.`);
        bankerFinalScore = bankerHandScore;
        return bankerFinalScore;
    } else if (bankerHandScore < 3) {
        bankerHand.push(
            shoe.deal()
        );
        bankerFinalScore = (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
        console.log('Banker Hand: ');
        bankerHand.forEach(logCard);
        console.log('  ', bankerFinalScore);
        return bankerFinalScore;
    } else if (bankerHandScore == 3){
        if (playerHand[2].score == 8) {
            bankerFinalScore = bankerHandScore;
            return bankerFinalScore;
        } else {
            bankerHand.push(
                shoe.deal()
            );
            bankerFinalScore = (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
            bankerHand.forEach(logCard);
            return bankerFinalScore;
        };
    } else if (bankerHandScore == 4) {
        if (playerHand[2].score != 8 && playerHand[2].score != 9) {
            bankerHand.push(
                shoe.deal()
            );
            bankerFinalScore = (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
            bankerHand.forEach(logCard);
            return bankerFinalScore;
        } else {
            bankerFinalScore = bankerHandScore;
            return bankerFinalScore;
        };
    } else if (bankerHandScore == 5) {
        if (playerHand[2].score == 4 ||
            playerHand[2].score == 5 ||
            playerHand[2].score == 6 ||
            playerHand[2].score == 7
        ) {
            bankerHand.push(
                shoe.deal()
            );
            bankerFinalScore = (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
            bankerHand.forEach(logCard);
            return bankerFinalScore;            
        } else {
            bankerFinalScore = bankerHandScore;
            return bankerFinalScore;
        };
    } else if (bankerHandScore == 6) {
        if (playerHand[2].score == 6 || playerHand[2].score == 7) {
            bankerHand.push(
                shoe.deal()
            );
            bankerFinalScore = (bankerHand[0].score + bankerHand[1].score + bankerHand[2].score) % 10;
            bankerHand.forEach(logCard);
            return bankerFinalScore;       
        } else {
            bankerFinalScore = bankerHandScore;
            return bankerFinalScore;
        };
    } else if (bankerHandScore == 7) {
        bankerFinalScore = bankerHandScore;
            return bankerFinalScore;
    };
};

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

// Im sure this is a bad idea, but I don't understand why it is showing an error.  
declareWinner(playerDraw(playerHand), bankerDraw(bankerHand));

// I think I need to dump the result of the draw function into a global scope variable instead of calling
// the function as an argument.  I think this will make everything cleaner and more simple.  

// TODO use switch / case to determine payouts.





// playerDraw(playerHand);
// bankerDraw(bankerHand);
// playerHand.forEach(logCard);
// console.log(' ');
// bankerHand.forEach(logCard);


