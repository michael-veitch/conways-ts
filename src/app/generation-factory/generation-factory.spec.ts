import { GenerationFactory } from './generation-factory';
import { Cell } from '../models/cell';
import { CellHelper } from './../helpers/cell-helper';

describe('Generation Factory', () => {
        const board = [
            new Cell(true, 0 , 0),
            new Cell(true, 0 , 1),
            new Cell(false, 0 , 2),
            new Cell(true, 1 , 0),
            new Cell(true, 1 , 1),
            new Cell(false, 1 , 2),
            new Cell(false, 2 , 0),
            new Cell(false, 2 , 1),
            new Cell(false, 2 , 2),
        ];
        let cellHelper: CellHelper = new CellHelper();
        const factory = new GenerationFactory(cellHelper);

    describe('getNextBoard()', () => {
        it('should return the next generation board given a board', () => {
            let nextBoard = factory.getNextGenBoard(board);
            expect(nextBoard[0]).toEqual(new Cell(true, 0, 0));
            expect(nextBoard[1]).toEqual(new Cell(true, 0, 1));
            expect(nextBoard[2]).toEqual(new Cell(false, 0, 2));
            expect(nextBoard[3]).toEqual(new Cell(true, 1, 0));
            expect(nextBoard[4]).toEqual(new Cell(true, 1, 1));
            expect(nextBoard[5]).toEqual(new Cell(false, 1, 2));
            expect(nextBoard[6]).toEqual(new Cell(false, 2, 0));
            expect(nextBoard[7]).toEqual(new Cell(false, 2, 1));
            expect(nextBoard[8]).toEqual(new Cell(false, 2, 2));
        });
        
    });

});