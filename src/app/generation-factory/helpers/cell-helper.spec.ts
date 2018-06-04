import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellHelper } from './cell-helper';
import { Cell } from '../../models/cell';

describe('Cell Helper', () => {
    const helper = new CellHelper();
    describe('getNeighbours()', () => {


        it('should return one neighbour given coords (1,1) and one neighbour', () => {
            let board = [
                new Cell(true, 0, 0),
                new Cell(false, 0, 1),
                new Cell(false, 0, 2),
                new Cell(false, 1, 0),
                new Cell(true, 1, 1),
                new Cell(false, 1, 2),
                new Cell(false, 2, 0),
                new Cell(false, 2, 1),
                new Cell(false, 2, 2),
            ];
            let cell = new Cell(true, 1, 1);
            let neighbours = helper.getNeighbours(cell, board);

            expect(neighbours).toBe(1);
        });

        it('should return two neighbours given coords (0,0) and two neighbours', () => {
            let board = [
                new Cell(true, 0 , 0),
                new Cell(true, 0 , 1),
                new Cell(false, 0 , 2),
                new Cell(true, 1 , 0),
                new Cell(false, 1 , 1),
                new Cell(false, 1 , 2),
                new Cell(false, 2 , 0),
                new Cell(false, 2 , 1),
                new Cell(false, 2 , 2),
            ];
            let cell = new Cell(true, 0, 0);
            let neighbours = helper.getNeighbours(cell, board);

            expect(neighbours).toBe(2);
        });

        it('should return three neighbours given coords (0,0) and three neighbours', () => {
            let board = [
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
            let cell = new Cell(true, 0, 0);
            let neighbours = helper.getNeighbours(cell, board);

            expect(neighbours).toBe(3);
        });
    });

    describe('doesCellLive()', () => {
        it('should return false given 1 neighbour', () => {
            let cell = new Cell(true, 0, 0);
            let result = helper.doesCellLive(cell, 1);
            expect(result).toBe(false);
        });
        
        it('should return true given 2 neighbours and live cell', () => {
            let cell = new Cell(true, 0, 0);
            let result = helper.doesCellLive(cell, 2);
            expect(result).toBe(true);
        });

        it('should return true given 3 neighbours and live cell', () => {
            let cell = new Cell(false, 0, 0);
            let result = helper.doesCellLive(cell, 3);
            expect(result).toBe(true);
        });

        it('should return false given more than 3 neighbours', () => {
            let cell = new Cell(true, 0, 0);
            let result = helper.doesCellLive(cell, 4);
            expect(result).toBe(false);
        });

        it('should return true given exactly 3 neighbours and a dead cell', () => {
            let cell = new Cell(false, 0, 0);
            let result = helper.doesCellLive(cell, 3);
            expect(result).toBe(true);
        });
    });

    describe('getNextGenCell', () => {
        it('should return a cell with the same coordinates', () => {
            let board = [
                new Cell(false, 0 , 0),
                new Cell(false, 0 , 1),
                new Cell(false, 0 , 2),
                new Cell(true, 1 , 0),
                new Cell(true, 1 , 1),
                new Cell(false, 1 , 2),
                new Cell(false, 2 , 0),
                new Cell(false, 2 , 1),
                new Cell(false, 2 , 2),
            ];

            let cell = new Cell(true, 1, 1);
            let nextGenCell = helper.getNextGenCell(cell, board);

            expect(nextGenCell.rowIndex).toBe(1);
            expect(nextGenCell.columnIndex).toBe(1);
        })

        it('should return a dead cell given 1 neighbours', () => {
            let board = [
                new Cell(false, 0 , 0),
                new Cell(false, 0 , 1),
                new Cell(false, 0 , 2),
                new Cell(true, 1 , 0),
                new Cell(true, 1 , 1),
                new Cell(false, 1 , 2),
                new Cell(false, 2 , 0),
                new Cell(false, 2 , 1),
                new Cell(false, 2 , 2),
            ];
            let cell = new Cell(true, 1, 1);
            let nextGenCell = helper.getNextGenCell(cell, board);
            
            expect(nextGenCell.isAlive).toBe(false)
        });

        it('should return a live cell given 2 neighbours', () => {
            let board = [
                new Cell(false, 0 , 0),
                new Cell(false, 0 , 1),
                new Cell(false, 0 , 2),
                new Cell(true, 1 , 0),
                new Cell(true, 1 , 1),
                new Cell(true, 1 , 2),
                new Cell(false, 2 , 0),
                new Cell(false, 2 , 1),
                new Cell(false, 2 , 2),
            ];
            let cell = new Cell(true, 1, 1);
            let nextGenCell = helper.getNextGenCell(cell, board);
            
            expect(nextGenCell.isAlive).toBe(true)
        });

        it('should return a live cell given 3 neighbours', () => {
            let board = [
                new Cell(false, 0 , 0),
                new Cell(true, 0 , 1),
                new Cell(false, 0 , 2),
                new Cell(true, 1 , 0),
                new Cell(true, 1 , 1),
                new Cell(true, 1 , 2),
                new Cell(false, 2 , 0),
                new Cell(false, 2 , 1),
                new Cell(false, 2 , 2),
            ];
            let cell = new Cell(true, 1, 1);
            let nextGenCell = helper.getNextGenCell(cell, board);
            
            expect(nextGenCell.isAlive).toBe(true)
        });

        it('should return a dead cell given more than 3 neighbours', () => {
            let board = [
                new Cell(false, 0 , 0),
                new Cell(true, 0 , 1),
                new Cell(false, 0 , 2),
                new Cell(true, 1 , 0),
                new Cell(true, 1 , 1),
                new Cell(true, 1 , 2),
                new Cell(false, 2 , 0),
                new Cell(true, 2 , 1),
                new Cell(false, 2 , 2),
            ];
            let cell = new Cell(true, 1, 1);
            let nextGenCell = helper.getNextGenCell(cell, board);
            
            expect(nextGenCell.isAlive).toBe(false)
        });

        it('should return a live cell given exactly 3 neighbours and a dead cell', () => {
            let board = [
                new Cell(false, 0 , 0),
                new Cell(true, 0 , 1),
                new Cell(false, 0 , 2),
                new Cell(true, 1 , 0),
                new Cell(false, 1 , 1),
                new Cell(true, 1 , 2),
                new Cell(false, 2 , 0),
                new Cell(false, 2 , 1),
                new Cell(false, 2 , 2),
            ];
            let cell = new Cell(false, 1, 1);
            let nextGenCell = helper.getNextGenCell(cell, board);
            
            expect(nextGenCell.isAlive).toBe(true)
        });
    })
});