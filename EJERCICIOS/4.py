#Escribir un algoritmo que calcule el area y volumen de un cilindro donde se 
#ingrese el radio y la altura
#Area = (2*(PI*r^2))+ ((2*PI*r)*h)
#volumen = (PI*r^2)*h
import math

def area(r,h):
    return (2*(math.pi*pow(r,2)))+((2*math.pi*r)*h)

def volumen(r,h):
    return (math.pi*pow(r,2))*h

def ingresarDatos():
    print("Ingrese el radio del Cilindro")
    r = float(input())
    print("Ingrese la altura del Cilindro")
    h = float(input())
    return (r,h)

def mostrar():
    (r,h) = ingresarDatos()
    print(f"Este el area del cilindro {area(r,h)}")
    print(f"Este el volumen del cilindro {volumen(r,h)}")

mostrar()
