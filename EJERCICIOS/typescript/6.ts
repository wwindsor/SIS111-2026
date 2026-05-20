import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

type NotaMateria = {
  asignatura: string;
  examen: number;
  practica1: number;
  practica2: number;
};

type PromedioMateria = {
  asignatura: string;
  promedio: number;
};

async function ingresarDatos(): Promise<NotaMateria[]> {
  const asignaturas = ['Programacion', 'Algebra Lineal', 'Ing de Sistemas'];
  const datos: NotaMateria[] = [];

  for (const asignatura of asignaturas) {
    console.log(`Ingrese la nota de examen de ${asignatura}`);
    const examen = Number(await rl.question(''));

    console.log(`Ingrese la nota de practica 1 de ${asignatura}`);
    const practica1 = Number(await rl.question(''));

    console.log(`Ingrese la nota de practica 2 de ${asignatura}`);
    const practica2 = Number(await rl.question(''));

    datos.push({ asignatura, examen, practica1, practica2 });
  }

  return datos;
}

async function calcular(): Promise<PromedioMateria[]> {
  const datos = await ingresarDatos();
  const promedios: PromedioMateria[] = [];

  for (const dato of datos) {
    const promedioPracticas = (dato.practica1 + dato.practica2) / 2;
    let promedio = 0;

    if (dato.asignatura === 'Programacion') {
      promedio = dato.examen * 0.9 + promedioPracticas * 0.1;
    } else if (dato.asignatura === 'Algebra Lineal') {
      promedio = dato.examen * 0.8 + promedioPracticas * 0.2;
    } else if (dato.asignatura === 'Ing de Sistemas') {
      promedio = dato.examen * 0.85 + promedioPracticas * 0.15;
    }

    promedios.push({ asignatura: dato.asignatura, promedio });
  }

  return promedios;
}

function mostrarPromedios(promedios: PromedioMateria[]): void {
  let promedioGeneral = 0;

  for (const dato of promedios) {
    console.log(`Promedio de ${dato.asignatura}: ${dato.promedio}`);
    promedioGeneral += dato.promedio;
  }

  console.log(`Promedio general: ${promedioGeneral / promedios.length}`);
}

const promedios = await calcular();
mostrarPromedios(promedios);
rl.close();

