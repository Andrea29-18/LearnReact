const nombre = 'Alejandra';
const apellido = 'García';

//const nombreCompleto = nombre +  ' ' + apellido;

// Template string
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombreCompleto) {
    return 'Hola ' + nombreCompleto + '!';
}   

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);