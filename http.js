const _ = require('lodash');
var i = 0;
const items = [1, [2,[3,[4,[5,[6]]]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.time('100000 elements');
while(i < 1000000000000) {
    i++;
}
console.timeEnd('100000 elements');