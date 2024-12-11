const apiKey = 'gs0wW7EHKVKrSj9Yr8Ril0QvseJC9rr7';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );