class Niveau {
    constructor(largeur, hauteur, depart, arrivee) {
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.labyrinthe = genererLabyrinthe(largeur, hauteur);
        this.depart = depart;
        this.arrivee = arrivee;
    }

    dessiner(ctx, tailleCellule) {
        dessinerLabyrinthe(this.labyrinthe, ctx, tailleCellule);
        // Dessiner départ et arrivée
        ctx.fillStyle = 'red';
        ctx.fillRect(this.depart.x * tailleCellule, this.depart.y * tailleCellule, tailleCellule, tailleCellule);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.arrivee.x * tailleCellule, this.arrivee.y * tailleCellule, tailleCellule, tailleCellule);
    }
}
