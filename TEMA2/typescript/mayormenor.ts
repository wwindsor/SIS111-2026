import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({input, output})

function mayormenor(a: number, b: number, c: number){
let menor = a, mayor=a;
//Para sacar el mayor
if(a > b && a > c) mayor=a;
else if(b > a && b > c) mayor=b;
else mayor=c;
//Para sacar el menor
if(a < b && a < c) menor=a;
else if(b < a && b < c) menor=b;
else menor=c;
return `Menor: ${menor} Mayor: ${mayor}`;
}
    
console.log("********Mayor Menor**********")
const a = await rl.question("Introduzca el valor de a: ")
const b = await rl.question("Introduzca el valor de b: ")
const c = await rl.question("Introduzca el valor de c: ")

console.log(mayormenor(a,b,c));
rl.close();