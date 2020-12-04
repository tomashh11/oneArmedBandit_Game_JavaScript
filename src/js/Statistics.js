class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics = (win, bid) => {
        let gameResult = {
            win: win,
            bid: bid
        };

        this.gameResults.push(gameResult);
    };

    checkWin = (result) => {
        return result.win;
    };

    showGameStatistics = () => {
        let numberOfGames = this.gameResults.length;
        let numberOfWins = this.gameResults.filter(this.checkWin).length;
        let numberOfLosses = numberOfGames - numberOfWins;

        return [numberOfGames, numberOfWins, numberOfLosses];
    };
}

export default Statistics;