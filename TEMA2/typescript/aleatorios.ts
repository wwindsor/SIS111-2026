import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({input, output})

function aleatorios(n: number){
    let pares = ""
    let impares = ""
    for (let count=0;count < n;count++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        console.log(numero)
        if (numero % 2 == 0) pares += `${numero}, `;
        else impares += `${numero}, `
    }
    return `Pares: ${pares}\nImpares: ${impares} `
}
    
console.log("********Aleatorios pares impares**********")
const n = await rl.question("Introduzca el valor de n: ")
console.log(aleatorios(n));
rl.close();