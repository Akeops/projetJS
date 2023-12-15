export class Joueur {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    deplacer(nouveauX, nouveauY, labyrinthe) {
        if (labyrinthe.estLibre(nouveauX, nouveauY)) {
            this.x = nouveauX;
            this.y = nouveauY;
            return true;
        }
        return false;
    }

    dessiner(ctx, tailleCellule) {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x * tailleCellule + tailleCellule / 2, this.y * tailleCellule + tailleCellule / 2, tailleCellule / 4, 0, Math.PI * 2);
        ctx.fill();
    }
}
