import { RandomBoardHelper } from "./random-board-helper";

describe('Random Board Helper', () => {


    describe('generateRandomNumber()', () => {
        it('should return a random number bigger than 0 and smaller than 100', () => {
            const randomNumber = RandomBoardHelper.generateRandomNumber();
            expect(randomNumber).toBeGreaterThan(0);
            expect(randomNumber).toBeLessThan(100);
        });
    });

    describe('doesCellLive()', () => {
        it('should return true given a number smaller than the seperator', () => {
            const number = 25;
            const seperator = 50;

            const returnVal = RandomBoardHelper.doesCellLive(number, seperator);

            expect(returnVal).toBeTruthy();
        });

        it('should return false given a number bigger than the seperator', () => {
            const number = 75;
            const seperator = 50;

            const returnVal = RandomBoardHelper.doesCellLive(number, seperator);

            expect(returnVal).toBeFalsy();
        });
    });

    });