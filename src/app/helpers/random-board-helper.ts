export class RandomBoardHelper {

    public static generateRandomNumber(): number {
        let randomNumber = Math.floor(Math.random() * 100);
        return randomNumber;
    }

    public static doesCellLive(randomNumber: number, seperator: number): boolean {
        if(randomNumber > 0 && randomNumber < seperator) {
            return true
          } else {
            return false;
          }
    }
}