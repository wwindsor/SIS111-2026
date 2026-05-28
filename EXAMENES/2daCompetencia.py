# EXAMEN PRÁCTICO - SEGUNDA COMPETENCIA
# SIS-111 Introducción a la Programación
# Programa: Evaluación académica de un estudiante


def leer_nota(numero_nota):
    """
    Lee una nota y valida que esté entre 0 y 100.
    """
    nota = float(input(f"Ingrese la nota {numero_nota}: "))

    while nota < 0 or nota > 100:
        print("Error: la nota debe estar entre 0 y 100.")
        nota = float(input(f"Ingrese nuevamente la nota {numero_nota}: "))

    return nota


def leer_asistencia():
    """
    Lee el porcentaje de asistencia y valida que esté entre 0 y 100.
    """
    asistencia = float(input("Ingrese el porcentaje de asistencia: "))

    while asistencia < 0 or asistencia > 100:
        print("Error: la asistencia debe estar entre 0 y 100.")
        asistencia = float(input("Ingrese nuevamente el porcentaje de asistencia: "))

    return asistencia


def calcular_promedio(nota1, nota2, nota3):
    """
    Calcula el promedio de tres notas.
    """
    promedio = (nota1 + nota2 + nota3) / 3
    return promedio


def determinar_resultado(promedio, asistencia):
    """
    Determina el resultado académico del estudiante.
    """
    if promedio >= 51 and asistencia >= 75:
        resultado = "Aprobado"
    elif promedio < 51:
        resultado = "Reprobado por nota"
    else:
        resultado = "Reprobado por asistencia"

    return resultado


def mostrar_reporte(nombre, nota1, nota2, nota3, promedio, asistencia, resultado):
    """
    Muestra el reporte académico final.
    """
    print("\n===== REPORTE ACADÉMICO =====")
    print("Estudiante:", nombre)
    print("Nota 1:", nota1)
    print("Nota 2:", nota2)
    print("Nota 3:", nota3)
    print("Promedio final:", round(promedio, 2))
    print("Asistencia:", asistencia, "%")
    print("Resultado:", resultado)
    print("=============================")


# Programa principal

nombre = input("Ingrese el nombre completo del estudiante: ")

nota1 = leer_nota(1)
nota2 = leer_nota(2)
nota3 = leer_nota(3)

asistencia = leer_asistencia()

promedio = calcular_promedio(nota1, nota2, nota3)

resultado = determinar_resultado(promedio, asistencia)

mostrar_reporte(nombre, nota1, nota2, nota3, promedio, asistencia, resultado)