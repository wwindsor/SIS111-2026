import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({input, output})

function calculadora(num1: number ,num2: number, operador: string):any
{
    if(operador=='+') return num1+num2;
    if(operador=='-') return num1-num2;
    if(operador=='*') return num1*num2;
    if(operador=='/')
        if(num2!=0) return num1/num2;
        else return `No se puede dividir entre ${num2}`
    else return 'Error';
}
console.log("********CALCULADORA**********")
const num1 = await rl.question("Introduzca el primer numero:")
const operador = await rl.question("Introduzca el operador (+,-,/,*): ")
const num2 = await rl.question("Introduzca el segundo numero:")

console.log(`El resultado es, ${calculadora(num1,num2,operador)}`);
rl.close();