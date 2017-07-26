require('mocha-testcheck').install();

const objectHash = require('object-hash');
const properties = require('./properties');

const times = 100;
const genFunc = gen.intWithin(0, 9).then((i) => {
    return function hashEq(val) {
        return objectHash(val).startsWith(i.toString());
    }
});

describe('testcheck', function () {
    this.timeout(30000);

    properties.forEach((property) => {
        check.it(
            // Property description
            property.description,
            { times },
            // First value: A function that returns a boolean for any input
            genFunc,
            // Second value: An array of any values
            gen.array(gen.any),
            // The property
            property.test
        );
    });
});