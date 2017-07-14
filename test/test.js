var index = require("../public/index");

describe("Ergast API Request Test", function() {
    describe("Last Race Average Drivers Age", function() {
        it("return a value (Integer) representing average drivers age", function() {
            index.averageDriversAge().then(function(averageAge) {
                if (!Number.isInteger(averageAge)) {
                    throw new Error("Error : function averageDriversAge() should return an Integer");
                } else if (averageAge < 18 || averageAge > 50) {
                    throw new Error("Error : function averageDriversAge() return an unexpected Integer value");
                } else {
                    done();
                }
            }).catch(function(error) {
                throw error;
            });
        });
    });
});