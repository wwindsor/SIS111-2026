"""
Una persona que va de compras a la multitienda "CyberSTORE" decide llevar 
un control sobre lo que va comprando, para saber la cantidad de dinero 
que tendrá que pagar al llegar a la caja
La tienda solamente vende 3 tipos de productos, estos pueden ser 
Televisores (codigo 1), Refrigeradores (codigo 2), Lavadoras (codigo 3)
No se puede ingresar el codigo de otro articulo, por lo que solo esos 3
valores pueden ser ingresados (validacion)
La persona ira exactamente 3 veces a la tienda...

Ud. debe realizar un Algoritmo que permita, en cada vez que visite la tienda se:
    > Indicar el codigo
    > Ingresar la cantidad
    > Ingresar el valor

Finalmente, el algoritmo debe dar como respuesta lo siguiente:

Se compraron X televisores, a un total de XXXXX
Se compraron Y refrigeradores, a un total de XXXXX
Se compraron Z lavadoras, a un total de XXXXX
"""

def validar(x):
    if(x==1): return True
    elif(x==2): return True
    elif(x==3): return True
    else: return False

def ingresarDatos():
    print('Seleccione su producto')
    print('Televisores (codigo 1), Refrigeradores (codigo 2), Lavadoras (codigo 3)')
    while(range(3)<3):
        print(f"Ingresar codigo")
        codigo = int(input())
        if(validar(codigo)):
            print(f"Ingresar la cantidad")
            cantidad = int(input())
            print(f"Ingresar el valor")
            valor = float(input())
        else: ingresarDatos(); break; 

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
