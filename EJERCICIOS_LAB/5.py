def mostrar_menu():
    opcion = -1
    while opcion != 0:
        print("\n---------MENU---------")
        print("1. Registrar estudiante")
        print("2. Listar estudiantes")
        print("3. Buscar estudiante")
        print("4. Calcular promedio general")
        print("0. SALIR")
        opcion = int(input("Seleccione una opcion"))
        if opcion == 1:
            registrar_estudiante()
        elif opcion == 2:
            listar_estudiantes()
        elif opcion == 3:
            buscar_estudiante()
        elif opcion == 4:
            calcular_promedio_general()
        elif opcion == 0:
            print("Programa finalizado")
        else:
            print("opcion invalida, intente nuevamente")

