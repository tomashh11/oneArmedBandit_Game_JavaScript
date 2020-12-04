import Draw from './Draw';
import Result from './Result';
import Statistics from './Statistics';
import Wallet from './Wallet';

class Game {
    constructor(startMoney) {
        this.statistics = new Statistics();
        this.wallet = new Wallet(startMoney);

        document.getElementById("start").addEventListener("click", this.startGame.bind(this));

        this.boards = [...document.querySelectorAll(".color")];
        this.inputBid = document.getElementById("bid");
        this.spanWallet = document.querySelector(".wallet");
        this.spanResult = document.querySelector(".result");
        this.spanNumber = document.querySelector(".number");
        this.spanWins = document.querySelector(".win");
        this.spanLosses = document.querySelector(".loss");

        this.render();
    };

    render(colors = ["gray", "gray", "gray"], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        });

        if (result) {
            result = `Wygrałeś ${wonMoney} $.`;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid} $.`;
        }

        this.spanWallet.textContent = `${money} $.`;
        this.spanResult.textContent = result;
        this.spanNumber.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

        this.inputBid.value = "";
    };

    startGame () {
        if (this.inputBid.value < 1) {
            return alert("Kwota którą chcesz grać jest za mała")
        }

        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert("Nie masz wystarczająco środków, żeby zagrać");
        }

        this.wallet.changeWallet(bid, "-");

        this.draw = new Draw();

        const colors = this.draw.getdrawResult();

        const win = Result.checkWin(colors);

        this.statistics.addGameToStatistics(win, bid);

        const wonMoney = Result.moneyWinInGame(win, bid);

        this.wallet.changeWallet(wonMoney);

        this.render(colors, this.wallet.getWalletValue(), win, this.statistics.showGameStatistics(), bid, wonMoney);

    };
}

export default Game;