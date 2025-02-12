const roadLength = 40; 
const rows = 6;
const road: string [][] = Array(rows).fill(null).map(() => Array(roadLength).fill(' '));

let currentRow: number = 0;
let currentIndex: number= 0;

function displayRoad() {
    console.clear();
    road.forEach(row => console.log(row.join(' ')));       
}
    // console.log(`Rupees: ${purse}  Player: ${playerBet}  Banker: ${bankerBet}  Tie: ${tieBet}`);


function updateRoad(outcome: string) {
   
    if (currentRow > 0 && road[currentRow - 1][currentIndex] === outcome) {
        if (currentRow < rows - 1) {
            road[currentRow][currentIndex] = outcome;
            currentRow++
        } else {
            console.log('Max height');
        }
        
    } else {
        currentIndex++;
        if (currentIndex >= roadLength) {
            console.log("Road is full!");
            return;
        }
        currentRow = 0;
        road[currentRow][currentIndex] = outcome;
    }
    displayRoad();
}

displayRoad();
updateRoad('P');
updateRoad('P');
updateRoad('P');