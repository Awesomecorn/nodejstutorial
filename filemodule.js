const {readFileSync, writeFileSync, read, write} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


writeFileSync('./content/ressult-sync.txt', 'Hello World', {flag:'a'})

console.log('done with this task');
console.log('starting the next one');