
export default class Road {
    private roadLength: number;
    private rows: number;
    private grid: string[][];
    private currentRow: number;
    private currentIndex: number;

    constructor(roadLength: number = 40, rows: number = 6) {
        this.roadLength = roadLength;
        this.rows = rows;
        this.grid = Array(rows).fill(null).map(() => Array(roadLength).fill(" "));
        this.currentRow = 0;
        this.currentIndex = 0;
    }

    displayRoad() {
        console.clear();
        this.grid.forEach(row => console.log(row.join(' ')));
    }

    updateRoad(outcome: string) {
        if (this.currentRow > 0 && this.grid[this.currentRow -1][this.currentIndex] == outcome) {
            if (this.currentRow < this.rows - 1) {
                this.grid[this.currentRow][this.currentIndex] = outcome;
                this.currentRow++;
            } else {
                this.moveToNextColumn(outcome);
            }
            this.displayRoad();
        }
    }

    moveToNextColumn(outcome: string) {
        this.currentIndex++;
        if (this.currentIndex >= this.roadLength) {
            return;
        }
        this.currentRow = 0;
        this.grid[this.currentRow][this.currentIndex] = outcome;
        this.currentRow++;
    }
}