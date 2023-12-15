let canvas, ctx;
let joueur, niveauActuel;
let tailleCellule = 20;
let niveaux = [];
let niveauActuelIndex = 0;

window.onload = function() {
    canvas = document.getElementById('canvasLabyrinthe');
    ctx = canvas.getContext('2d');
    joueur = { x: 0, y: 0 };

    // Créer des niveaux
    niveaux.push(new Niveau(10, 10, { x: 0, y: 0 }, { x: 9, y: 9 }));
    niveaux.push(new Niveau(15, 15, { x: 0, y: 0 }, { x: 14, y: 14 }));
    // Ajouter plus de niveaux au besoin

    niveauActuel = niveaux[0];
    joueur = { ...niveauActuel.depart };
    niveauActuel.dessiner(ctx, tailleCellule);
    dessinerJoueur(joueur, ctx, tailleCellule);

    document.addEventListener('keydown', function(e) {
        deplacerJoueur(joueur, e, niveauActuel.labyrinthe, niveauActuel.largeur, niveauActuel.hauteur, tailleCellule, ctx);
        niveauActuel.dessiner(ctx, tailleCellule);
        dessinerJoueur(joueur, ctx, tailleCellule);
    });
};

function passerAuNiveauSuivant() {
    niveauActuelIndex++;
    if (niveauActuelIndex < niveaux.length) {
        niveauActuel = niveaux[niveauActuelIndex];
        joueur = { ...niveauActuel.depart };
        niveauActuel.dessiner(ctx, tailleCellule);
        dessinerJoueur(joueur, ctx, tailleCellule);
    } else {
        alert("Félicitations, vous avez terminé tous les niveaux !");
    }
}
