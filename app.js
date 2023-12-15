let canvas, ctx;
let player, labyrinthe;
let tailleCellule = 40;
let largeurLabyrinthe = 10;
let hauteurLabyrinthe = 10;
let depart = { x: 0, y: 0 };
let arrivee = { x: largeurLabyrinthe - 1, y: hauteurLabyrinthe - 1 };

window.onload = function() {
    canvas = document.getElementById('canvasLabyrinthe');
    ctx = canvas.getContext('2d');
    canvas.width = largeurLabyrinthe * tailleCellule;
    canvas.height = hauteurLabyrinthe * tailleCellule;

    player = { ...depart };
    labyrinthe = genererLabyrinthe(largeurLabyrinthe, hauteurLabyrinthe);

    dessinerLabyrinthe();
    dessinerJoueur();

    document.addEventListener('keydown', deplacerJoueur);
};

function genererLabyrinthe(largeur, hauteur) {
    let lab = [];
    for (let y = 0; y < hauteur; y++) {
        lab[y] = [];
        for (let x = 0; x < largeur; x++) {
            lab[y][x] = false; // false indique un passage libre
        }
    }
    // Ajoutez ici la logique pour créer des murs dans le labyrinthe
    return lab;
}

function dessinerLabyrinthe() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < hauteurLabyrinthe; y++) {
        for (let x = 0; x < largeurLabyrinthe; x++) {
            if (labyrinthe[y][x]) {
                ctx.fillStyle = 'black';
                ctx.fillRect(x * tailleCellule, y * tailleCellule, tailleCellule, tailleCellule);
            }
        }
    }
    // Dessiner le point de départ (rouge) et d'arrivée (vert)
    ctx.fillStyle = 'red';
    ctx.fillRect(depart.x * tailleCellule, depart.y * tailleCellule, tailleCellule, tailleCellule);
    ctx.fillStyle = 'green';
    ctx.fillRect(arrivee.x * tailleCellule, arrivee.y * tailleCellule, tailleCellule, tailleCellule);
}

function dessinerJoueur() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(player.x * tailleCellule + tailleCellule / 2, player.y * tailleCellule + tailleCellule / 2, tailleCellule / 4, 0, Math.PI * 2);
    ctx.fill();
}

function deplacerJoueur(e) {
    let nouveauX = player.x;
    let nouveauY = player.y;

    switch(e.key) {
        case 'ArrowUp':    nouveauY--; break;
        case 'ArrowDown':  nouveauY++; break;
        case 'ArrowLeft':  nouveauX--; break;
        case 'ArrowRight': nouveauX++; break;
    }

    if (nouveauX >= 0 && nouveauX < largeurLabyrinthe && nouveauY >= 0 && nouveauY < hauteurLabyrinthe && !labyrinthe[nouveauY][nouveauX]) {
        player.x = nouveauX;
        player.y = nouveauY;

        if (player.x === arrivee.x && player.y === arrivee.y) {
            alert('Vous avez gagné !');
            player = { ...depart };
        }
    } else {
        alert('Perdu ! Vous avez touché un mur.');
        player = { ...depart };
    }

    dessinerLabyrinthe();
    dessinerJoueur();
}
