import { getHeroById } from "./Bases/08-imp-exp";

const promesa = new Promise((resolve, reject) => {
    //Resolve se ejecuta cuando la promesa se resuelve correctamente
    setTimeout(() => {
        const p1 = getHeroById(2);
        resolve(p1);
    }, 2000);

    //Reject se ejecuta cuando la promesa no se resuelve correctamente
});

// Se ejecuta cuando la promesa se resuelve correctamente
promesa.then((heroe) => {
    console.log('Heroe', heroe);
})
.catch(err => console.warn(err)); // Se ejecuta cuando la promesa no se resuelve correctamente

// -----

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    
    });
}

getHeroByIdAsync(10)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err));