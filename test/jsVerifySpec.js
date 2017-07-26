const jv = require('jsverify');
const properties = require('./properties');

describe('jsverify', () => {
    const any = jv.oneof(jv.number, jv.falsy, jv.bool, jv.json, jv.string);

    properties.forEach((property) => {
        jv.property(
            // Property description
            property.description,
            // First value: A function that returns a boolean for any input
            jv.fn(jv.bool),
            // Second value: An array of any values
            jv.array(any),
            // The property
            property.test
        );
    });
});