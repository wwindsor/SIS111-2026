#Ejercicio 2
# Resumen: Registrar 5 notas, mostrarlas y calcular el promedio
"""
Consigna: Desarrolle un programa que permita ingresar 5 notas de un estudiante, almacenarlas en una lista y calcular el promedio final.
El programa debe mostrar todas las notas ingresadas y el promedio obtenido
"""
notas = []
suma = 0
for i in range(1,6):
    nota = float(input(f"Ingrese la nota {i}: "))
    notas.append(nota)
print("\nNOTAS REGISTRADAS")
for nota in notas:
    print(nota)
    suma=suma+nota
promedio = suma / len(notas)
print(f"\nPromedio final: {promedio}")