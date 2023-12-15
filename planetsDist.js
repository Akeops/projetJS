const latitude = 50;
const longitude = 50;
const planet_name = 'Mars';

const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';

const apiUrl = `https://api.le-systeme-solaire.net/position/?lat=${latitude}&lon=${longitude}&objects=${planet_name}`;

fetch(proxyUrl + apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (!data[0] || !data[0].distance) {
            throw new Error('La réponse de l\'API ne contient pas les données attendues.');
        }
        const distance_km = data[0].distance;
        console.log(`La distance de la Terre à ${planet_name} depuis votre position est d'environ ${distance_km} kilomètres.`);
    })
    .catch(error => console.error('Erreur capturée:', error));
