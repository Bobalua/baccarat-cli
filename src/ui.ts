
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playerBet = 0;
let bankerBet = 0;
let tieBet = 0;
let purse = 100;
const gridSize = 8; 
const totalCells = gridSize * gridSize;
let road = Array(totalCells).fill(' - '); 
let currentIndex = 0;

function displayRoad() {
    console.clear();
    for (let i = 0; i < totalCells; i += gridSize) {
        console.log(road.slice(i, i + gridSize).join(' | '));
        
    }
    console.log(`Rupees: ${purse}  Player: ${playerBet}  Banker: ${bankerBet}  Tie: ${tieBet}`);
}
function updateRoad(outcome: string) {
    if (currentIndex < totalCells) {
        road[currentIndex] = outcome;
        currentIndex++;
        displayRoad();
    } else {
        console.log("Road is full!"); // TODO make a reset function that will be called here
    }
}

// const countdown = (seconds) => {
//     let remaining = seconds;
  
//     const interval = setInterval(() => {
//       process.stdout.write(`\rTime until next hand: ${remaining} second`);
//       remaining--;

//         if (remaining < 0) {
//             clearInterval(interval);
//             console.log("\nNO MORE BETS!!");
//             rl.close();
//         };
//     }, 1000);
// };

  

updateRoad(' P ');
// countdown(15);


// function that opens a readline interface to get user input
function betPrompt() {
    // asking for user input and putting response inside scope variable 'pbt'
    rl.question('Where would you like to place a bet? (player, banker, tie, or none) ', (pbt: string) => {
        // if user is finished betting, this will close rl interface and display bets
        if (pbt.toLowerCase() == 'none') {
            console.log(`NO MORE BETS!!`);
            rl.close();
            return;
        }
        // checking to see if user input is valid
        if (!["player", "banker", "tie"].includes(pbt.trim().toLowerCase())) {
            console.log('That was not one of your options.');
            return betPrompt();
        }
        // user input stored in scope variable 'amtInput;
        rl.question('How much would you like to bet?  ', (amtInput: string) => {
            const amt = parseFloat(amtInput);
            if (isNaN(amt) || amt <= 0 || amt > purse) {
                console.log('No funny business.  Lets try again');
                    setTimeout(() => {
                        console.clear();
                        displayRoad();
                        betPrompt();
                    }, 1500);
            }
            switch(pbt.toLowerCase()) {
                case 'player':
                    purse -= amt;
                    playerBet += amt;
                    break;
                
                case 'banker':
                    purse -= amt;
                    bankerBet += amt;
                    break;
                
                case 'tie':
                    purse -= amt;
                    tieBet += amt;
                    break;
            }
            // console.log(`Current bets: \nBanker: ${bankerBet}\nPlayer: ${playerBet}\nTie: ${tieBet}`);
            
            setTimeout(() => {
                console.clear();
                displayRoad();
                betPrompt();
            }, 1500);
        })
    })
};
betPrompt();