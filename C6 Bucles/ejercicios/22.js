function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"function combinar(str1, str2, str3)



   
      // Inicializamos una cadena vacía para almacenar el resultado combinado.
      let result = "";
  
      // Iteramos sobre la longitud máxima entre las tres cadenas.
      for (let i = 0; i < Math.max(str1.length, str2.length, str3.length); i++) {
          // Verificamos si el carácter en la posición actual de la cadena str1 no es undefined y no está vacío.
          if (str1[i] !== undefined && str1[i] !== '') {
              // Si es así, agregamos este carácter al resultado.
              result += str1[i];
          }
  
          // Repetimos el mismo proceso para la cadena str2.
          if (str2[i] !== undefined && str2[i] !== '') {
              result += str2[i];
          }
  
          // Repetimos el mismo proceso para la cadena str3.
          if (str3[i] !== undefined && str3[i] !== '') {
              result += str3[i];
          }
      }
  
      // Devolvemos el resultado final.
      return result;
  }
  
console.log(combine("hola", "123", ""));
module.exports= combine;
 

   








