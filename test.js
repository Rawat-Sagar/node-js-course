
const greet = (names) =>
{
    console.log(`hello, ${names}`);    
}

greet('sagar');
greet('sanjay');

// Global Object in Node Js
// @ts-ignore
console.log(global);
// @ts-ignore
global.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => 
{
    console.log('in the interval');
},1000);
// @ts-ignore
console.log(__dirname);
// @ts-ignore
console.log(__filename);

console.log(document.querySelectorAll)