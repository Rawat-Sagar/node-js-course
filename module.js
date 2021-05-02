// @ts-ignore
const xyz = require('./people');
const { people, age } = require('./people');

console.log('xyz :', xyz); //returning the empty object if exports is not used

console.log(xyz.people, xyz.age);
console.log('******/Use of destructuring/********');
console.log(people, age);


// Operating System
const os = require('os')
console.log(os);
console.log(os.platform(), os.homedir())