#Ejercicio 1
# Resumen: Registrar 5 estudiantes y mostrar la lista completa
"""
Consigna: Desarrolle un programa que almecene en una lista el nombre de 5 estudiantes y luego muestre
todos los nombres registrados.
El programa debe permitir al usuario ingresar los nombres por teclado. Una vez completado el registro deberá mostrar la 
lista completa de estudiantes
"""
estudiantes = []

for i in range(1,6):
    nombre = input(f"Ingrese el nombre del estudiante {i}: ")
    estudiantes.append(nombre)
print("\nLISTAS DE ESTUDIANTES")
for estudiante in estudiantes:
    print(estudiante)