import { Jeu } from './jeu.js';

let jeu = new Jeu('canvasLabyrinthe');
document.addEventListener('keydown', (e) => jeu.deplacerJoueur(e.key));
