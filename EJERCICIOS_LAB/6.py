def buscar_material(materiales, codigo):
    for material in materiales:
        if material["codigo"] == codigo:
            return material
    return None
def leer_numero(mensaje):
    while True:
        try:
            valor = int(input(mensaje))
            if valor >= 0:
                return valor
            else:
                print("Error: la cantidad no puede ser negativa")
        except ValueError:
            print("Error: debe ingrewsas un número entero")
def actualizar_cantidad(materiales):
    codigo = input("Ingrese el codigo del material").upper()
    material = buscar_material(materiales,codigo)
    if material is None:
        print("No existe un material con ese codigo")
    else:
        print("Material encontrado: ")
        print(f"Nombre: {material["nombre"]}")
        print(f"Cantidad actual: {material["cantidad"]} ")
        nueva_cantidad = leer_numero("Ingrese la nueva cantidad")
        material["cantidad"] = nueva_cantidad
        print("Cantidad Actualizada correctamente")

def resumen_por_categoria(materiales):
    resumen = {}
    for material in materiales:
        categoria = material["categoria"]
        if categoria in resumen:
            resumen[categoria] += 1
        else:
            resumen[categoria] = 1
    print("\nResumen por categoria")
    for categoria, cantidad in resumen.items():
        print(f"{categoria}: {cantidad} materiales")