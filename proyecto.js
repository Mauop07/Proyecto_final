//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35
var salario_recargo = 0.05

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

// Al final del programa se le pregunta al usuario si quiere continuar o salir
var salida = ""
while (salida.toUpperCase() !== "SALIR"){

//Mensajes de alerta para ingresar datos 
	var nombre = prompt("Ingrese su nombre, por favor: ")
	var edad = prompt("¿Cuantos años tiene? Ingrese solamente números: ")

	var casado = prompt("¿Está casado actualmente?: ")
	//Comprobamos la edad del cónyuge, solamente si se está casado/a
	var edad_conyuge
	if("SI" == casado.toUpperCase()){
		edad_conyuge = prompt("¿Que edad tiene su esposo/a?: ")
	}
	//convirtiendo las edades ingresadas a números 
	var edad_numero = parseInt(edad)
	var edad_conyuge_numero = 0
	//convirtiendo la edad del cónyuge si se esta casado/a
	if("SI" == casado.toUpperCase()){
		edad_conyuge_numero = parseInt(edad_conyuge)
	}

	var hijos = prompt("¿Tiene hijos o hijas?: ")
	//Comprobamos la cantidad de hijos solamente si los tienen
	var cantidad_hijos
	if ("SI" == hijos.toUpperCase()){
		cantidad_hijos = parseInt(prompt("¿Cuantos hijos tiene?: "))
	}

	var propiedades = prompt("¿Tiene propiedades a su nombre?: ")
	var cantidad_propiedades
	if ("SI" == propiedades.toUpperCase()){
		cantidad_propiedades = parseInt(prompt("¿Cuantas propiedades tiene?: "))
	}

	var salario = parseInt(prompt("¿Cual es su salario mensual?: "))

	//Aquí debe calcular el recargo total basado en las respuestas ingresadas


	//Aquí es donde debe de calcular los recargos y el valor final
	//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado

	if(edad_numero >= 18 && edad_numero < 25){
		//Calculamos el recargo en base a la edad 
		recargo = precio_base * edad_18
		//Sumamos todos los recargos que hemos obtenido
		recargo_total = recargo_total + recargo
	}

	//aqui puede colocar un else if() con el siguiente rango

	else if(edad_numero >= 25 && edad_numero <= 49){
		recargo = precio_base * edad_25
		recargo_total = recargo_total + recargo
	}

	else if(edad_numero >= 50){
		recargo = precio_base * edad_50
		recargo_total = recargo_total + recargo
	}

	/** 
	 * 2. Recargo por la edad del conyuge
	 */

	if ("SI" == casado.toUpperCase()){
		if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25){
			recargo = precio_base * casado_18
			recargo_total = recargo_total + recargo
		}
		else if(edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49){
			recargo = precio_base * casado_25
			recargo_total = recargo_total + recargo
		}
		else if(edad_conyuge_numero >= 50){
			recargo = precio_base * casado_50
			recargo_total = recargo_total + recargo
		}
	}


	/**
	 * 3. Recargo por la cantidad de hijos 
	 */ 

	if ("SI" == hijos.toUpperCase()){
		recargo = precio_base * hijos_recargo * cantidad_hijos
		recargo_total = recargo_total + recargo
	}

	/**
	 * 4. Recargo por cantidad de propiedades
	 */

	if ("SI" == propiedades.toUpperCase()){
		recargo = precio_base * propiedades_recargo * cantidad_propiedades
		recargo_total = recargo_total + recargo
	}

	/**
	 * 5. Recargo salario
	 */

	if (salario > 0){
		recargo = salario * salario_recargo
		recargo_total = recargo_total + recargo
	}

	precio_final = precio_base + recargo_total

	//Resultado
	alert ("Para el asegurado "+nombre)
	alert ("El recargo total sera de: "+recargo_total)
	alert ("El precio sera de: "+precio_final)
	
	salida = prompt("Desea realizar una nueva cotizacion?: ")
}

alert("Gracias por usar nuestros servicios!")