// import Dealer from "./dealer";


// // Set up a dealer, he sets up a shoe
// // The dealer shuffles the shoe
// // Introduce the dealer to baccarat by having him listen to event end
// // Introduce the bookie to baccarat by having him listen to event start

// // Try some shit

// TODO add time
// TODO add pauses to pace the gameplay
// TODO integrate road class
// TODO integrate 'narration' that explains the hands as they are being dealt, 
//      what bets won, and how much the user won as well as giving the user a way to leave the game
// TODO general UI tweaks and reworks.
// TODO possibly add a 'challenge mode', with a set starting amount, and a certain amount of hands.
//      money remaining at the end will be added to the leaderboard.
// TODO clear currentBets map after each hand
// TODO play with event emitter functionality. I think that will be the key to getting this game loop to run smoothly.


import Baccarat from "./baccarat";
import Dealer from "./dealer";
import Bookie from "./bookie";
import AvailableBet from "./availableBet";
import { AvailableBets } from "./config";
import readline from "readline";
import {stdin, stdout} from "process"
import Road from "./road"

const road = new Road();
const dealer = new Dealer();
const bookie = new Bookie();
const game = new Baccarat();
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

console.log("\n Welcome to Bobalua's Baccarat Palace!\n");
console.log("\n Here is 100 Rupees to get you started.\n Good Luck!")

dealer.shoe.shuffle();

while (true) {
    if (dealer.shoe.cards.length < 5) {
        console.log("Shoe is almost empty. Time to reload.")
        break;
    }
    if (bookie.purse <= 0) {
        console.log("You are broke. You are a loser. No wonder she left.");
        break;
    }

    road.displayRoad();

    console.log(`Balance: ${bookie.purse} Rupees`);
    console.log("\nAvailable Bets:");
    
    AvailableBets.forEach((bet, index) => {
        console.log(`${index + 1}. ${bet.name} (Payout: ${bet.payout[0]}:${bet.payout[1]})`);
    });


    rl.question("Where would you like to place your bet?", bet => {
        const selectedBet = AvailableBets[parseInt(bet) - 1];

        if (!selectedBet) {
            console.log("No funny business. Try again.")
            return;
        }

        rl.question("How much would you like to bet?", amount => {
            const betAmount = parseInt(amount);
            if (isNaN(betAmount) || betAmount <= 0 || betAmount > bookie.purse) {
                console.log('I dont think so.  Lets do this again.');
                return;
            }
            bookie.placeBet(selectedBet, betAmount);
        })
    })
        

    console.log("\n Dealing cards...");
    
    const bankerHand = [dealer.shoe.deal(), dealer.shoe.deal()];
    const playerHand = [dealer.shoe.deal(), dealer.shoe.deal()];

    console.log(`\n Banker Hand: ${bankerHand.map(card => card.rank).join(", ")}`);
    console.log(` Player Hand: ${playerHand.map(card => card.rank).join(", ")}`);

    // Resolve bets
    bookie.resolveBets(bankerHand, playerHand);

    console.log(` Your new balance: ${bookie.purse}`);

    
}
