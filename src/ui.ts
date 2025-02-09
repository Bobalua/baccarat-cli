const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let bankerBet = 0;
let playerBet = 0;
let tieBet = 0;
let wager = 0;
let purse = 100;
const gridSize = 8; 
const totalCells = gridSize * gridSize;
let road = Array(totalCells).fill('-'); 
let currentIndex = 0;

function displayGrid() {
    console.clear();
    for (let i = 0; i < totalCells; i += gridSize) {
        console.log(road.slice(i, i + gridSize).join(' | '));
    }
}
// when I put the parameter type in here, the index wont execute in node.  same with seconds.
function updateGrid(outcome) {
    if (currentIndex < totalCells) {
        road[currentIndex] = outcome;
        currentIndex++;
        displayGrid();
    } else {
        console.log("Grid is full!"); // TODO make a reset function that will be called here
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

  

updateGrid('P');
// countdown(15);
console.log(`Rupees: ${purse}`);

// this all feels shitty.  I need to rework this system completely.
while(true) {
    rl.question("\nPress w to wager or d to deal ", (betOrDeal) => {
        if (betOrDeal == 'b') {
            rl.question("\nHow much would you like to bet?  ", (bet) => {
                if (bet > purse) {
                    console.log('you dont have that many rupees')
                } else {wager = bet;
                    console.log("b to bet on banker\np to bet on player\nt to bet on tie");
                    rl.question("\nWhat would you like to bet on?", (betOn) => {
                        if (betOn == 'b'){
                            bankerBet += wager;
                            console.log(`${bankerBet} rupees on the Banker.`);
                        }
                    })

                }
            })
        } else if (betOrDeal == 'd') {
            
        }
    });
};