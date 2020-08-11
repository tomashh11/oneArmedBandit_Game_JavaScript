class Draw {
    constructor() {
        this.options = ["green", "blue", "red"];
        let _result = this.drawResult();
        this.getdrawResult = () => {
            return _result;
        }
    }

    drawResult = () => {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color);
        };
        return colors;
    };
}