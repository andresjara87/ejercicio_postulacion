package prueba;

import java.util.Arrays;
import java.util.Scanner;

public class Prueba {
	
	public static int existeEnArreglo(int[] arreglo, int busqueda) {
		//10,2,-1
		  for (int x = 0; x < arreglo.length; x++) {
			  for (int j = 0; j < x+1; x++) {
				//10,2,-1
				    if (arreglo[x] < arreglo[j]) {
				    	arreglo[x]=arreglo[x];
				    }else {
				    	int var=arreglo[j];
				    	arreglo[j]=arreglo[x];
				    	arreglo[x]=var;//2,-1,10
				    }
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
		int[] arreglo = { 1,-100,4 };
		
		for (int i = 0; i < arreglo.length - 1; i++) {
			
            for (int j = 0; j < arreglo.length - 1; j++)
            {
		  	if (arreglo[j] > arreglo[j + 1]) {
		  		
		  		  int temp = arreglo[j + 1];
		          arreglo[j + 1] = arreglo[j];
		          arreglo[j] = temp;
		  		
		    }
		
		       /*   int temp = arreglo[j + 1];
		          arreglo[j + 1] = arreglo[j];
		          arreglo[j] = temp;*/
		
		      }
		  }
		
        
		
     for (int n:arreglo) {
			
			System.out.println(n);
		}
		
	}

}
