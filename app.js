const latitude = 50;
const longitude = 50;

// Remplacez 'planet_name' par le nom de la planète que vous souhaitez mesurer, par exemple 'Mars'
const planet_name = 'Mars';

// Configuration de l'URL de l'API HORIZONS
const url = `https://api.le-systeme-solaire.net/position/?lat=${latitude}&lon=${longitude}&objects=${planet_name}`;

// Envoi de la requête à l'API en utilisant fetch
fetch(url)
    .then(response => response.json())
    .then(data => {
        const distance_km = data[0].distance;
        console.log(`La distance de la Terre à ${planet_name} depuis votre position est d'environ ${distance_km} kilomètres.`);
    })
    .catch(error => console.error(error));