// Function Constructor new instance is created for a ten-frame game
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
    // Loops through a ten game frame and determines strikes spares and regular frames
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
    // Regular frames: adds sum of pins knocked down in a frame (i.e. frameIndex[0] + frameIndex[1])
    function sumOfPin() {
        return bowler.rolls[frameIndex] + bowler.rolls[frameIndex + 1];
    };
    // Spare bonus: gives a bonus credit for the first roll of the next frame (or third sequential roll in our frameIndex array)
    function spareBonus() {
        return bowler.rolls[frameIndex + 2];
    };
    // Strike Bonus: gives a bonus credit for the the next two rolls of the next frame (or second and third sequential rolls in our frameIndex array)
    function strikeBonus() {
        return bowler.rolls[frameIndex + 1] + bowler.rolls[frameIndex + 2];
    };
        
    // Strike: When a bowler knocks down ten pins on the first roll of a frame that's a strike (i.e. frameIndex[0], frameIndex[2], etc.)
    function strike() {
        return bowler.rolls[frameIndex] === 10;
    }
        // Spare: When a player knocks down the remaining pins on the second roll of a frame, that's a spare, and therefore given ten points + a bonus for the next roll for that frame.
    function spare() {
        return bowler.rolls[frameIndex] + bowler.rolls[frameIndex + 1] === 10;
    }

    return score;

};
