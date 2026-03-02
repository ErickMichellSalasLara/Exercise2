// Crear un for que imprima numeros pares hasta llegar al 10
// Crear una array vacio pa este rollo
// Imprimir todo en un solo console.log

let arreglo = [];

for(Contador = 0; Contador <= 10; Contador++){
    if(Contador % 2 === 0){
        arreglo.push(Contador);
    }
}
console.log(arreglo);