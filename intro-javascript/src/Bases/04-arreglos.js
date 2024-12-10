// Arreglos en JS 

//const arreglo = new Array(100); Primera forma de crear uno
const arreglo = [1,2,3,4]; //Segunda forma de crear uno

//Agrega elementos al arreglo (No es recomendable)
// El push no es recomendable porque modifica el objeto principal
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

let arreglo2 = [...arreglo, 5];

//Revisar el README.md para ver más métodos de arreglos
const arreglo3 = arreglo2.map(function(numero){ //Esto se llama un callback
    return numero * 2; //Si no tiene un return especifico regresa un undefined
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);