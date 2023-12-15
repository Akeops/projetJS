class Niveau {
    constructor(largeur, hauteur, depart, arrivee, densiteMurs) {
        this.labyrinthe = new Labyrinthe(largeur, hauteur, densiteMurs);
        this.depart = depart;
        this.arrivee = arrivee;
        this.tailleCellule = 20;
    }

    dessiner(ctx) {
        this.labyrinthe.dessiner(ctx, this.tailleCellule);
        ctx.fillStyle = 'red';
        ctx.fillRect(this.depart.x * this.tailleCellule, this.depart.y * this.tailleCellule, this.tailleCellule, this.tailleCellule);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.arrivee.x * this.tailleCellule, this.arrivee.y * this.tailleCellule, this.tailleCellule, this.tailleCellule);
    }
}
