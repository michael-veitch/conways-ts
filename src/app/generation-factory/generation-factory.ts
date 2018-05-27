import { Cell } from "../models/cell";
import { Output } from "@angular/core";
import { CellHelper } from "./helpers/cell-helper";

export class GenerationFactory {
    
    @Output()
    public nextGeneration: Cell[][];

    public rowIndex = 0;
    public columnIndex = 0;

    public cellHelper: CellHelper;

    constructor(public cells: Cell[][]) {
        this.cellHelper = new CellHelper(this.cells);
        this.getNextBoard();
    }

    public getNextBoard(): void {
        let nextBoard: Cell[][] = [];
        this.cells.forEach((row) => {
            row.forEach((cell) => {
                nextBoard[this.rowIndex][this.columnIndex] = this.getNextCell(cell);
                this.columnIndex++;
            });
            this.rowIndex++;
        });
        this.nextGeneration = Array.from(nextBoard);
    }

    public getNextCell(cell: Cell): Cell {
        return CellHelper.applyRules(cell);
    }
}