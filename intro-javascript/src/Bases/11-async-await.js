const getImange = async () => {
    try {
        const apiKey = 'gs0wW7EHKVKrSj9Yr8Ril0QvseJC9rr7';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); // El await se usa para esperar a que la promesa se resuelva antes de la siguiente linea de codigo

        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
    catch (error) {
        console.error(error);
    }
};

getImange();