#Ejercicio 4
# Resumen: Registrar 3 estudiantes con su nota final , usando diccionarios
"""
Consigna: Desarrolle un programa que permita registrar 3 estudiantes. 
De cada estudiante se debe guardar su nombre y su nota final. los datos deberan almacenarse 
usando una estructura compuesta
Se recomienda usar una lista de diccionarios
Al finalizar el registro, el programa debe mostrar el nombre, la nota y 
la situacion de cada estudiante. Un estudiante aprueba si su nota es mayor o igual a 51.
"""
estudiantes = []
for i in range(1,4):
    nombre = input(f"Ingrese el nombre del estudiante {i}: ")
    nota = float(input(f"Ingrese la nota final del estudiante {nombre}: "))
    
    estudiante = {
        "nombre":nombre,
        "nota":nota
    }
    estudiantes.append(estudiante)
print("\nREPORTE DE ESTUDIANTES")
for estudiante in estudiantes:
    if(estudiante["nota"] >= 51):
        resultado = "Aprobado"
    else:
        resultado = "Reprobado"
    print(f"{estudiante["nombre"]} - NOTA: {estudiante["nota"]} - {resultado}")