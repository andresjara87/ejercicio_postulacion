package prueba;

import java.util.Arrays;
import java.util.Scanner;

public class Prueba {
	
	public static int existeEnArreglo(int[] arreglo, int busqueda) {
		  for (int x = 0; x < arreglo.length; x++) {
		    if (arreglo[x] == busqueda) {
		      return x;
		    }
		  }
		  return -1;
	}
	
	public static void Buscar() {
		
		
		
		  int[] numeros = { 1, 3, 13, 15, 17, 19, 21, 23, 31, 34, 40, 51, 54, 68 };
		  int numeroBuscar = 51;
		  int posicionDeElementoBuscado = existeEnArreglo(numeros, numeroBuscar);
		  if (posicionDeElementoBuscado == -1) {
		    System.out.println("El elemento NO existe en el arreglo");
		  } else {
			System.out.println("El elemento existe: " + numeroBuscar);
		    System.out.println("El elemento existe en la posición: " + posicionDeElementoBuscado);
		  }
		  
		 
		  
		
	}
	
	public static void Ordenar() {
		
		int[] numeros = {7,4,5,2,1,10,8};
		
		Arrays.sort(numeros);
		
		for (int numero:numeros) {
			
			System.out.println(numero);
		}
		
		
		
		

		
	}

	public static void main(String[] args) {
		
		System.out.println("********************");
		System.out.println("Ejercicio 1 y 2");
		System.out.println("********************");
		System.out.println("Escriba la opcion 1 o 2");
		System.out.println("********************");
		System.out.println("1) buscar el numero 51 del array [1, 3, 13, 15, 17, 19, 21, 23, 31, 34, 40, 51, 54, 68]");
		System.out.println("2) Ordenar la lista de numeros [54,53,2,1,5,98,73,86,98,94,1,2,3,2]");
		
	
		 Scanner scanner = new Scanner(System.in);
		 int select = -1;
		 int num1 = 0, num2 = 0; //Variables
		
		
		
		//Recoger una variable por consola
		select = Integer.parseInt(scanner.nextLine()); 

		//Ejemplo de switch case en Java
		switch(select){
		case 1: 
			Buscar();
			break;
		case 2: 
			Ordenar();
			break;
		case 3: 
		  

	}
		
	}

}
