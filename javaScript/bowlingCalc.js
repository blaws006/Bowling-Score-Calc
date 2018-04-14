//Function Constructor that initalizes
var BowlingCalc = function (rolls, currentRoll) {
    this.rolls = [];
    this.currentRoll = 0;
}

BowlingCalc.prototype.roll = function (pins) {
     this.rolls[this.currentRoll++] = pins;
}

BowlingCalc.prototype.score = function () {
    var score = 0;
    var frameIndex = 0;
    var bowler = this;

    for (var currFrame = 0; currFrame < 10; currFrame++) {
        if (strike()) {
            score += 10 + strikeBonus()
            frameIndex++;
        } else if (spare()) {
            score += 10 + spareBonus();
            frameIndex += 2;
        } else {
            score += sumOfPin();
            frameIndex += 2;
        }
    }

    function sumOfPin() {
        return bowler.rolls[frameIndex] + bowler.rolls[frameIndex + 1];
    };

    function spareBonus() {
        return bowler.rolls[frameIndex + 2];
    };

    function strikeBonus() {
        return bowler.rolls[frameIndex + 1] + bowler.rolls[frameIndex + 2];
    };

    function strike() {
        return bowler.rolls[frameIndex] === 10;
    }

    function spare() {
        return bowler.rolls[frameIndex] + bowler.rolls[frameIndex + 1] === 10;
    }

    return score;

};