import { Labyrinthe } from './labyrinthe.js';
import { Joueur } from './joueur.js';

export class Jeu {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.niveau = 1;
        this.tailleCellule = 40;
        this.depart = { x: 0, y: 0 };
        this.arrivee = { x: 9, y: 9 }; // Changer les coordonnées d'arrivée selon votre labyrinthe
        this.initialiserJeu();
    }

    initialiserJeu() {
        this.labyrinthe = new Labyrinthe(10 + this.niveau, 10 + this.niveau, this.depart, this.arrivee);
        this.joueur = new Joueur(this.depart.x, this.depart.y);
        this.canvas.width = this.labyrinthe.largeur * this.tailleCellule;
        this.canvas.height = this.labyrinthe.hauteur * this.tailleCellule;
        this.dessiner();
    }

    deplacerJoueur(direction) {
        let { x, y } = this.joueur;
        switch(direction) {
            case 'ArrowUp':    y--; break;
            case 'ArrowDown':  y++; break;
            case 'ArrowLeft':  x--; break;
            case 'ArrowRight': x++; break;
        }
        if (this.joueur.deplacer(x, y, this.labyrinthe)) {
            this.verifierSortie();
            this.dessiner();
        } else {
            this.gererCollision();
        }
    }

    verifierSortie() {
        if (this.joueur.x === this.arrivee.x && this.joueur.y === this.arrivee.y) {
            alert('Vous avez gagné !');
            this.niveau++;
            this.initialiserJeu();
        }
    }

    gererCollision() {
        alert('Perdu ! Vous avez touché un mur.');
        this.joueur.x = this.depart.x;
        this.joueur.y = this.depart.y;
        this.dessiner();
    }

    dessiner() {
        this.labyrinthe.dessiner(this.ctx, this.tailleCellule);
        this.joueur.dessiner(this.ctx, this.tailleCellule);
    }
}
