export class Labyrinthe {
    constructor(largeur, hauteur, depart, arrivee) {
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.depart = depart;
        this.arrivee = arrivee;
        this.grille = this.genererGrille();
    }

    genererGrille() {
        let grille = [];
        for (let y = 0; y < this.hauteur; y++) {
            grille[y] = [];
            for (let x = 0; x < this.largeur; x++) {
                grille[y][x] = Math.random() < 0.3; // 30% de chance d'être un mur
            }
        }
        // Assurez-vous qu'il y a toujours un chemin possible du départ à l'arrivée
        this.creerChemin(this.depart.x, this.depart.y, this.arrivee.x, this.arrivee.y, grille);
        return grille;
    }

    estLibre(x, y) {
        return x >= 0 && x < this.largeur && y >= 0 && y < this.hauteur && !this.grille[y][x];
    }

    creerChemin(x1, y1, x2, y2, grille) {
        // Logique pour créer un chemin entre (x1, y1) et (x2, y2) en évitant les murs
        // Utilisez un algorithme comme le DFS ou le BFS pour cela
    }

    dessiner(ctx, tailleCellule) {
        for (let y = 0; y < this.hauteur; y++) {
            for (let x = 0; x < this.largeur; x++) {
                ctx.fillStyle = this.grille[y][x] ? 'black' : 'white';
                ctx.fillRect(x * tailleCellule, y * tailleCellule, tailleCellule, tailleCellule);
            }
        }
        // Dessiner le point de départ (rouge) et d'arrivée (vert)
        ctx.fillStyle = 'red';
        ctx.fillRect(this.depart.x * tailleCellule, this.depart.y * tailleCellule, tailleCellule, tailleCellule);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.arrivee.x * tailleCellule, this.arrivee.y * tailleCellule, tailleCellule, tailleCellule);
    }
}
