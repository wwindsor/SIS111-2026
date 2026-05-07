"""
Una persona que va de compras a la multitienda "CyberSTORE" decide llevar 
un control sobre lo que va comprando, para saber la cantidad de dinero 
que tendrá que pagar al llegar a la caja
La tienda solamente vende 3 tipos de productos, estos pueden ser 
Televisores (codigo 1), Refrigeradores (codigo 2), Lavadoras (codigo 3)
No se puede ingresar el codigo de otro articulo, por lo que solo esos 3
valores pueden ser ingresados (validacion)
La persona tiene que ir 3 veces a la tienda...

Ud. debe realizar un Algoritmo que permita, en cada vez que visite la tienda se:
    > Indicar el codigo
    > Ingresar la cantidad
    > Ingresar el precio unitario

Finalmente, el algoritmo debe dar como respuesta lo siguiente:

Se compraron X televisores, a un total de XXXXX
Se compraron Y refrigeradores, a un total de XXXXX
Se compraron Z lavadoras, a un total de XXXXX
"""

PRODUCTOS = {1:"televidores", 2:"refrigeradores", 3: "lavadoras"}

def ingresar_codigo():
    while True:
        print("\nSeleccione el producto: ")
        print("1. Televidores")
        print("2. Refrigeradores")
        print("3. Lavadoras")
        try:
            codigo = int(input("Ingrese el codigo del producto: "))
            if codigo in PRODUCTOS:
                return codigo
            else:
                print("Error: el codigo ingresado no es valido. Solo puede ingresar 1,2,3")
        except ValueError:
            print("Error: debe ingresar un numero entero")

def ingresar_cantidad():
    while True:
        try:
            cantidad = int(input("Ingrese la cantidad: "))
            if cantidad > 0:
                return cantidad
            else:
                print("Error: la cantidad debe ser mayor a cero")
        except ValueError:
            print("Error: debe ingresar un numero entero")

def ingresar_precio_unitario():
    while True:
        try:
            precio = int(input("Ingrese el precio unitario: "))
            if precio > 0:
                return precio
            else:
                print("Error: la precio unitario debe ser mayor a cero")
        except ValueError:
            print("Error: debe ingresar un numero entero")

def ingresar_datos():
    compras = []
    for visita in range(1,4):
        print(f"\n--- Visita {visita} a CyberSTORE ---")
        codigo = ingresar_codigo()
        cantidad = ingresar_cantidad()
        precio_unitario = ingresar_precio_unitario()
        compra = {"codigo":codigo, "cantidad":cantidad, "precio_unitario":precio_unitario}
        compras.append(compra)
    return compras

def calcular_totales(compras):
    resumen = {1:{"cantidad":0, "total":0},
               2:{"cantidad":0, "total":0},
               3:{"cantidad":0, "total":0} }
    for compra in compras:
        codigo = compra["codigo"]
        cantidad = compra["cantidad"]
        precio_unitario = compra["precio_unitario"]
        resumen[codigo]["cantidad"] += cantidad
        resumen[codigo]["total"] += cantidad * precio_unitario
    return resumen

def mostrar(resumen):
    print("\n==========RESUMEN DE LA COMPRA===========")
    for codigo, datos in resumen.items():
        nombre_producto = PRODUCTOS[codigo]
        cantidad = datos["cantidad"]
        total = datos["total"]
        print(f"Se comprarn {cantidad} {nombre_producto}, a un total de {total:.2f}")

def principal():
    compras = ingresar_datos()
    resumen = calcular_totales(compras)
    mostrar(resumen)

principal()