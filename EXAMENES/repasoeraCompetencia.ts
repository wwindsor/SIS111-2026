import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

// Interfaces
interface Mascota {
  nombre: string;
  especie: string;
  edad: number;
}

interface Dueno {
  nombre: string;
  telefono: string;
}

interface Consulta {
  fecha: string;
  motivo: string;
  diagnostico: string;
  tratamiento: string;
}

interface Paciente {
  codigo: string;
  mascota: Mascota;
  dueno: Dueno;
  historialConsultas: Record<string, Consulta>;
}

// Lista principal de pacientes
const pacientes: Paciente[] = [];

// Función para mostrar el menú
function mostrarMenu(): void {
  console.log("\n===== SISTEMA VETERINARIO =====");
  console.log("1. Registrar paciente");
  console.log("2. Listar pacientes");
  console.log("3. Buscar paciente por código");
  console.log("4. Agregar consulta al historial");
  console.log("5. Ver historial de consultas");
  console.log("6. Contar pacientes por especie");
  console.log("7. Salir");
}

// Leer número entero mayor o igual a cero
async function leerEntero(mensaje: string): Promise<number> {
  while (true) {
    const entrada = await rl.question(mensaje);
    const valor = Number(entrada);

    if (Number.isInteger(valor) && valor >= 0) {
      return valor;
    }

    console.log("Error: debe ingresar un número entero mayor o igual a 0.");
  }
}

// Buscar paciente por código
function buscarPaciente(codigo: string): Paciente | undefined {
  for (const paciente of pacientes) {
    if (paciente.codigo === codigo) {
      return paciente;
    }
  }

  return undefined;
}

// Registrar paciente
async function registrarPaciente(): Promise<void> {
  console.log("\n--- Registrar paciente ---");

  const codigo = (await rl.question("Ingrese el código del paciente: ")).toUpperCase();

  const pacienteExistente = buscarPaciente(codigo);

  if (pacienteExistente !== undefined) {
    console.log("Error: ya existe un paciente con ese código.");
    return;
  }

  const nombreMascota = await rl.question("Ingrese el nombre de la mascota: ");
  const especieEntrada = await rl.question("Ingrese la especie: ");
  const especie =
    especieEntrada.charAt(0).toUpperCase() + especieEntrada.slice(1).toLowerCase();

  const edad = await leerEntero("Ingrese la edad de la mascota: ");

  const nombreDueno = await rl.question("Ingrese el nombre del dueño: ");
  const telefonoDueno = await rl.question("Ingrese el teléfono del dueño: ");

  const paciente: Paciente = {
    codigo: codigo,
    mascota: {
      nombre: nombreMascota,
      especie: especie,
      edad: edad,
    },
    dueno: {
      nombre: nombreDueno,
      telefono: telefonoDueno,
    },
    historialConsultas: {},
  };

  pacientes.push(paciente);

  console.log("Paciente registrado correctamente.");
}

// Listar pacientes
function listarPacientes(): void {
  console.log("\n--- Lista de pacientes ---");

  if (pacientes.length === 0) {
    console.log("No existen pacientes registrados.");
    return;
  }

  for (const paciente of pacientes) {
    console.log("-----------------------------");
    console.log("Código:", paciente.codigo);
    console.log("Mascota:", paciente.mascota.nombre);
    console.log("Especie:", paciente.mascota.especie);
    console.log("Edad:", paciente.mascota.edad);
    console.log("Dueño:", paciente.dueno.nombre);
    console.log("Teléfono:", paciente.dueno.telefono);
  }
}

// Buscar paciente por código desde el menú
async function buscarPacientePorCodigo(): Promise<void> {
  console.log("\n--- Buscar paciente por código ---");

  const codigo = (await rl.question("Ingrese el código del paciente: ")).toUpperCase();

  const paciente = buscarPaciente(codigo);

  if (paciente === undefined) {
    console.log("No se encontró un paciente con ese código.");
    return;
  }

  console.log("Paciente encontrado:");
  console.log("Código:", paciente.codigo);
  console.log("Mascota:", paciente.mascota.nombre);
  console.log("Especie:", paciente.mascota.especie);
  console.log("Edad:", paciente.mascota.edad);
  console.log("Dueño:", paciente.dueno.nombre);
  console.log("Teléfono:", paciente.dueno.telefono);
}

// Agregar consulta al historial
async function agregarConsulta(): Promise<void> {
  console.log("\n--- Agregar consulta al historial ---");

  const codigo = (await rl.question("Ingrese el código del paciente: ")).toUpperCase();

  const paciente = buscarPaciente(codigo);

  if (paciente === undefined) {
    console.log("No se encontró un paciente con ese código.");
    return;
  }

  const numeroConsulta = Object.keys(paciente.historialConsultas).length + 1;
  const codigoConsulta = "C" + String(numeroConsulta).padStart(3, "0");

  const fecha = await rl.question("Ingrese la fecha de consulta: ");
  const motivo = await rl.question("Ingrese el motivo de consulta: ");
  const diagnostico = await rl.question("Ingrese el diagnóstico: ");
  const tratamiento = await rl.question("Ingrese el tratamiento: ");

  paciente.historialConsultas[codigoConsulta] = {
    fecha: fecha,
    motivo: motivo,
    diagnostico: diagnostico,
    tratamiento: tratamiento,
  };

  console.log("Consulta registrada correctamente con código:", codigoConsulta);
}

// Ver historial de consultas
async function verHistorialConsultas(): Promise<void> {
  console.log("\n--- Historial de consultas ---");

  const codigo = (await rl.question("Ingrese el código del paciente: ")).toUpperCase();

  const paciente = buscarPaciente(codigo);

  if (paciente === undefined) {
    console.log("No se encontró un paciente con ese código.");
    return;
  }

  const historial = paciente.historialConsultas;

  if (Object.keys(historial).length === 0) {
    console.log("El paciente no tiene consultas registradas.");
    return;
  }

  console.log("Historial de:", paciente.mascota.nombre);

  for (const codigoConsulta in historial) {
    const consulta = historial[codigoConsulta];

    console.log("-----------------------------");
    console.log("Código consulta:", codigoConsulta);
    console.log("Fecha:", consulta.fecha);
    console.log("Motivo:", consulta.motivo);
    console.log("Diagnóstico:", consulta.diagnostico);
    console.log("Tratamiento:", consulta.tratamiento);
  }
}

// Contar pacientes por especie
function contarPacientesPorEspecie(): void {
  console.log("\n--- Contar pacientes por especie ---");

  if (pacientes.length === 0) {
    console.log("No existen pacientes registrados.");
    return;
  }

  const resumen: Record<string, number> = {};

  for (const paciente of pacientes) {
    const especie = paciente.mascota.especie;

    if (resumen[especie] !== undefined) {
      resumen[especie]++;
    } else {
      resumen[especie] = 1;
    }
  }

  console.log("Resumen por especie:");

  for (const especie in resumen) {
    const cantidad = resumen[especie];

    if (cantidad === 1) {
      console.log(`${especie}: ${cantidad} paciente`);
    } else {
      console.log(`${especie}: ${cantidad} pacientes`);
    }
  }
}

// Función principal
async function main(): Promise<void> {
  let opcion = "";

  while (opcion !== "7") {
    mostrarMenu();
    opcion = await rl.question("Seleccione una opción: ");

    if (opcion === "1") {
      await registrarPaciente();
    } else if (opcion === "2") {
      listarPacientes();
    } else if (opcion === "3") {
      await buscarPacientePorCodigo();
    } else if (opcion === "4") {
      await agregarConsulta();
    } else if (opcion === "5") {
      await verHistorialConsultas();
    } else if (opcion === "6") {
      contarPacientesPorEspecie();
    } else if (opcion === "7") {
      console.log("Saliendo del sistema...");
    } else {
      console.log("Opción inválida. Intente nuevamente.");
    }
  }

  rl.close();
}

main();