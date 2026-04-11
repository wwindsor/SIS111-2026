//Elaborar un algoritmo dado un numero limite = n de aleatorios entre 1 y 100, encontrar las coincidencias de x

import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({input, output})

function generar(limite: number){
    let numerosRan = new Array();
    for(let count=0;count<limite;count++){
        let numero = Math.floor(Math.random() * 100) + 1;
        numerosRan.push(numero);
    }       
    return numerosRan
}

function buscar(x: number, limite: number){
    let coin = 0
    const aleatorios = generar(limite)
    for (let element of aleatorios) {
        if(element==x) coin+=1;
    }        
    return {"mensaje":`Numero de coincidencias para ${x} es de: ${coin}`, "resultado":aleatorios} 
}
    

console.log("********Busqueda en Array**********")
console.log('Introduzca el limite: ')
const limite = await rl.question("Introduzca el limite: ")
const x = await rl.question("Introduzca el numero que desea buscar: ")
console.log(buscar(x,limite))
rl.close();