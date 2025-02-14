

// const roadLength = 40; 
// const rows = 6;
// const road: string[][] = Array(rows).fill(null).map(() => Array(roadLength).fill(' '));

// let currentRow: number = 0;
// let currentIndex: number = 0;

// function displayRoad() {
//     console.clear();
//     road.forEach(row => console.log(row.join(' ')));       
// }

// function updateRoad(outcome: string) {
//     if (currentRow > 0 && road[currentRow - 1][currentIndex] === outcome) {
//         //  stacking vertically
//         if (currentRow < rows - 1) {
//             road[currentRow][currentIndex] = outcome;
//             currentRow++;
//         } else {
//             // console.log('Max height reached, moving to new column.');
//             currentIndex++;
//             if (currentIndex >= roadLength) {
//                 console.log("Road is full!");
//                 return;
//             }
//             currentRow = 0;
//             road[currentRow][currentIndex] = outcome;
//             currentRow++; 
//         }
//     } else {
//         // Move to a new column
//         currentIndex++;
//         if (currentIndex >= roadLength) {
//             console.log("Road is full!");
//             return;
//         }
//         currentRow = 0;
//         road[currentRow][currentIndex] = outcome;
//         currentRow++; 
//     }
    
//     displayRoad();
// }

// displayRoad();
// updateRoad('P');
// updateRoad('P');
// updateRoad('P');
// updateRoad('B'); 
// updateRoad('B'); 
// updateRoad('P');
// updateRoad('P');
// updateRoad('P');
// updateRoad('P');
// updateRoad('P'); 
// updateRoad('P'); 
// updateRoad('P');
// updateRoad('P');
// updateRoad('P');
// updateRoad('P');
// updateRoad('B'); 
// updateRoad('B'); 
// updateRoad('P');
// updateRoad('P');
// updateRoad('P');
// updateRoad('P');
// updateRoad('B'); 
// updateRoad('B'); 
// updateRoad('P');
// updateRoad('B');
// updateRoad('P');
// updateRoad('B');
// updateRoad('P'); 
// updateRoad('B'); 
// updateRoad('P');
// updateRoad('T');
// updateRoad('P');
// updateRoad('P');
// updateRoad('B'); 
// updateRoad('B'); 
// updateRoad('P');
