import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({input, output})

function mayormenor(a: number, b: number, c: number){
if(a > b && a > c) return `Mayor: ${a}`;
else if(b > a && b > c) return `Mayor: ${b}`;
else return `Mayor: ${c}`;
}
    
console.log("********Mayor Menor**********")
const a = await rl.question("Introduzca el valor de a: ")
const b = await rl.question("Introduzca el valor de b: ")
const c = await rl.question("Introduzca el valor de c: ")

console.log(mayormenor(a,b,c));
rl.close();