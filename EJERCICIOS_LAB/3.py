#Ejercicio 3
# Resumen: Registrar 5 estudiantes, y buscar uno por nombre
"""
Consigna: Desarrolle un programa que registre el nombre de 5 estudiantes en una lista
y luego el programa deberá solicitar un nombre a buscar e indicar si el estudiante se encuentra 
o no registrado.
La busqueda debe realizarse recorriendo la lista
"""
estudiantes = []
for i in range(1,6):
    nombre = input(f"Ingrese el nombre del estudiante {i}: ")
    estudiantes.append(nombre)
nombre_buscado = input("\nIngrese el nombre a buscar: ")
encontrado = False
for estudiante in estudiantes:
    if estudiante.lower() == nombre_buscado.lower():
        encontrado = True
if encontrado:
    print(f"\nEl estudiante {nombre_buscado} se encuentra registrado.")
else:
    print(f"\nEl estudiante {nombre_buscado} no se encuentra registrado.")