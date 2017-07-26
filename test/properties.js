const R = require('ramda');
const filter = require('../index');

module.exports = [
    {
        description: 'Length after filter <= Length before filter',
        test: (fn, arr) => filter(fn, arr).length <= arr.length
    },
    {
        description: 'Elements in array after filter are contained in array before filter',
        test: (fn, arr) => filter(fn, arr).every((e) => arr.includes(e))
    },
    {
        description: 'Idempotence',
        test: (fn, arr) => {
            const once = filter(fn, arr);
            const twice = filter(fn, filter(fn, arr));
            return once.length === twice.length && once.every((el, i) => R.equals(el, twice[i]));
        }
    },
    {
        description: 'Resulting length is independent from sorting of the array',
        test: (fn, arr) => filter(fn, arr).length === filter(fn, arr.sort()).length
    }
];