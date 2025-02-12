const roadLength = 40; 
const rows = 6;
const roadRow: string[] = Array(roadLength).fill(' '); 
const road: string [][] = [roadRow, roadRow, roadRow, roadRow, roadRow, roadRow];
let currentRow: number = 0;
let currentIndex: number= 0;

function displayRoad() {
    console.clear();
    for (let i = 0; i < rows; i += roadLength) {
        console.log(road.slice(i, i + roadLength).join('\n'));
        
    }
    // console.log(`Rupees: ${purse}  Player: ${playerBet}  Banker: ${bankerBet}  Tie: ${tieBet}`);
}

function updateRoad(outcome: string) {
    if (currentIndex < roadLength && road[currentRow][currentIndex] == outcome) {
        currentRow++;
        road[currentRow][currentIndex] = outcome;
       
        displayRoad();
    } else {
        console.log("Road is full!"); // TODO make a reset function that will be called here
    }
}

displayRoad();
updateRoad('P');
updateRoad('P');
updateRoad('T');