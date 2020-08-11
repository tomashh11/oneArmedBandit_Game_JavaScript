class Wallet {
    constructor(money) {
        let _money = money;

        this.getWalletValue = () => {
            return _money;
        };

        this.checkCanPlay = (value) => {
            if (value <= _money) {
                return true;
            } else {
                return false;
            }
        };

        this.changeWallet = (bid, type = "+") => {
            if (typeof bid === "number" && !isNaN(bid)) {
                if (type === "+") {
                    return _money += bid;
                } else if (type === "-") {
                    return _money -= bid;
                } else {
                    throw new Error("Nieprawidłowy typ działania");
                }
            } else {
                throw new Error("Nieprawidłowa liczba");
            }
        }
    }

}