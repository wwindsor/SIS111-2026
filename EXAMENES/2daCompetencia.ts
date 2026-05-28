// EXAMEN PRÁCTICO - SEGUNDA COMPETENCIA
// SIS-111 Introducción a la Programación
// Programa: Evaluación académica de un estudiante

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function leerNumero(mensaje: string): Promise<number> {
    const respuesta: string = await rl.question(mensaje);
    return Number(respuesta);
}

async function leerNota(numeroNota: number): Promise<number> {
    let nota: number = await leerNumero(`Ingrese la nota ${numeroNota}: `);

    while (isNaN(nota) || nota < 0 || nota > 100) {
        console.log("Error: la nota debe estar entre 0 y 100.");
        nota = await leerNumero(`Ingrese nuevamente la nota ${numeroNota}: `);
    }

    return nota;
}

async function leerAsistencia(): Promise<number> {
    let asistencia: number = await leerNumero("Ingrese el porcentaje de asistencia: ");

    while (isNaN(asistencia) || asistencia < 0 || asistencia > 100) {
        console.log("Error: la asistencia debe estar entre 0 y 100.");
        asistencia = await leerNumero("Ingrese nuevamente el porcentaje de asistencia: ");
    }

    return asistencia;
}

function calcularPromedio(nota1: number, nota2: number, nota3: number): number {
    return (nota1 + nota2 + nota3) / 3;
}

function determinarResultado(promedio: number, asistencia: number): string {
    if (promedio >= 51 && asistencia >= 75) {
        return "Aprobado";
    } else if (promedio < 51) {
        return "Reprobado por nota";
    } else {
        return "Reprobado por asistencia";
    }
}

function mostrarReporte(
    nombre: string,
    nota1: number,
    nota2: number,
    nota3: number,
    promedio: number,
    asistencia: number,
    resultado: string
): void {
    console.log("\n===== REPORTE ACADÉMICO =====");
    console.log("Estudiante:", nombre);
    console.log("Nota 1:", nota1);
    console.log("Nota 2:", nota2);
    console.log("Nota 3:", nota3);
    console.log("Promedio final:", promedio.toFixed(2));
    console.log("Asistencia:", asistencia + "%");
    console.log("Resultado:", resultado);
    console.log("=============================");
}

async function main(): Promise<void> {
    const nombre: string = await rl.question("Ingrese el nombre completo del estudiante: ");

    const nota1: number = await leerNota(1);
    const nota2: number = await leerNota(2);
    const nota3: number = await leerNota(3);

    const asistencia: number = await leerAsistencia();

    const promedio: number = calcularPromedio(nota1, nota2, nota3);
    const resultado: string = determinarResultado(promedio, asistencia);

    mostrarReporte(nombre, nota1, nota2, nota3, promedio, asistencia, resultado);

    rl.close();
}

main();