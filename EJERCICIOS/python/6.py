"""
Un alumno desea saber cual sera su promedio general
en tres materias mas dificiles que cursa y cual sera
el promedio que obtendra en cada una de ellas,
estas materias se evaluan como se muestra a continuacion
1. Las calificaciones de programacion se obtienen 
de la siguiente manera:
    Examen: 90%, promedio de las practicas: 10% y se pidieron
    un total de 2 practicas
2. Las calificaciones de algebra lineal se obtienen 
de la siguiente manera:
    Examen: 80%, promedio de las practicas: 20% y se pidieron
    un total de 2 practicas
3. Las calificaciones de Ing de sistemas se obtienen 
de la siguiente manera:
    Examen: 85%, promedio de las practicas: 15% y se pidieron
    un total de 2 practicas
Ejemplo de diccionario = {"asignatura":"hola","examen":10,"practica1":50,"practica2":60}
"""



def ingresarDatos():
    asignaturas=("Programacion","Algebra Lineal","Ing de Sistemas")
    datos = []
    for asignatura in asignaturas:
        print(f"Ingrese la nota de examen de {asignatura}")
        examen = float(input())
        print(f"Ingrese la nota de practica 1  de {asignatura}")
        practica1 = float(input())
        print(f"Ingrese la nota de practica 2 de {asignatura}")
        practica2 = float(input())
        datos.append({"asignatura":asignatura,"examen":examen,
                      "practica1":practica1,"practica2":practica2})
    return datos

def calcular():
    datos = ingresarDatos()
    promedios = []
    for dato in datos:
        if dato.get("asignatura")=="Programacion":
            promedio = dato.get("examen")*0.9+(dato.get("practica1")+dato.get("practica2")/2)*0.1
        elif dato.get("asignatura")=="Algebra Lineal":
            promedio = dato.get("examen")*0.8+(dato.get("practica1")+dato.get("practica2")/2)*0.2
        elif dato.get("asignatura")=="Ing de Sistemas":
            promedio = dato.get("examen")*0.85+(dato.get("practica1")+dato.get("practica2")/2)*0.15
        promedios.append({"asignatura":dato.get("asignatura"),"promedio":promedio})
    return promedios
#Hacer la funcion mostrar promedios#
calcular()