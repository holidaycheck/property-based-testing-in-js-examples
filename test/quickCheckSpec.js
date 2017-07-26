const qc = require('quick_check');
const properties = require('./properties');
const assert = require('power-assert');

describe("quick_check", () => {
    properties.forEach((property) => {
        it(property.description, function () {
            qc.forAll(
                // First value: A function that returns a boolean for any input
                qc.function(qc.bool),
                // Second value: An array of any values
                qc.array,
                // The property
                (...args) => assert(property.test(...args))
            );
        });
    });
});