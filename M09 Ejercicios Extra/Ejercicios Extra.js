/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var claves = Object.keys(objeto);
   var arregloDeArreglos = claves.map(function(elemento){
      return [elemento, objeto[elemento]];
   } );
   return arregloDeArreglos;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde 
   // cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var frecuencia = {};
   for (var i = 0; i < string.length; i++) {
      var letra = string[i];
      if (frecuencia[letra]) frecuencia[letra]++;
      else frecuencia[letra] = 1;
   }
   var clavesOrdenadas = Object.keys(frecuencia).sort();
   var resultado = {};
   clavesOrdenadas.forEach(function (clave) {
      resultado[clave] = frecuencia[clave];
   });
    return resultado;   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   string = string.split('');
   cadenaMay = [];
   cadenaMin = [];
   for (let i = 0; i < string.length; i++){
      letra = string[i].toUpperCase();
      if (string[i] === letra) cadenaMay.push(letra);
      else cadenaMin.push(string[i]);
   }
   return ( cadenaMay.join('') + cadenaMin.join(''));

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el 
   // que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   cadena = frase.split(' ');
   nuevaCadena = [];
   cadena.forEach(element => {
     nuevaCadena.push(element.split('').reverse().join(''));
   });
   return (nuevaCadena.join(' '));
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numeroCAdena = numero.toString();
   numeroAlReves = numeroCAdena.split('').reverse().join('');
   if(numeroCAdena === numeroAlReves) return "Es capicua";
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string = string.split('');
   nuevaCadena = [];
   string.forEach(element => {
      switch (element) {
         case 'a': 
         case 'b':
         case 'c':
            break;
         default:
            nuevaCadena.push(element);
      }
   });
   return (nuevaCadena.join(''));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas 
   // en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
    });
    
    return(arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   na = [];
vacio = false;

cant1 = array1.length;
cant2 = array2.length;

if (cant1 != 0 && cant2 != 0){
    if (cant1 < cant2) {
        primero = array1;
        segundo = array2;
    }
    else {
        primero = array2;
        segundo = array1;
    } 
} else vacio=true;
if (!vacio) {
    for (let i = 0; i < primero.length; i++){
        datoBuscado = primero[i];
        if (segundo.includes(primero[i])) na.push(primero[i]);
    }
}

return (na);

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
