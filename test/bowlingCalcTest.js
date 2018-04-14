describe("BowlingCalc", function () {
    var game;

    function rollMany(n, pins) {
        while (n--) {
            game.roll(pins)
        };
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);

    }

    function rollStrike() {
        game.roll(10);
    }

   
    beforeEach(function () {
        game = new BowlingCalc();
    });

    it('handles a gutter ball game', function () {
        rollMany(20, 0);
        expect(game.score()).to.equal(0)
    })

    it ('handles a 90 point game', function(){
        rollMany(20, 4.5)
        expect(game.score()).to.equal(90)
    });

    it('handles a game full of spares', function () {
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        rollSpare();
        game.roll(5)
        expect(game.score()).to.equal(150);
    })
    it ('handles a perfect game', function(){
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        rollStrike();
        expect(game.score()).to.equal(300)
    })
});