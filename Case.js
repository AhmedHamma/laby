class Case {
    color = '#696969';
    tailleCase = "50px";
    carre = document.createElement('div');
    visited = false;
    parent;
    constructor(objet, taille) {
        this.posX = objet.posX;
        this.posY = objet.posY;
        this.walls = objet.walls;
        this.wallUp = objet.walls[0];
        this.wallRight = objet.walls[1];
        this.wallDown = objet.walls[2];
        this.wallLeft = objet.walls[3];
        this.taille = taille
    }
    neighbours = []

    checkNeighbours(tab) {
        if (!this.wallUp) {
            this.neighbours.push(tab[this.posX][this.posY - 1])
        }
        if (!this.wallRight) {
            this.neighbours.push(tab[this.posX + 1][this.posY])
        }
        if (!this.wallDown) {
            this.neighbours.push(tab[this.posX][this.posY + 1])
        }
        if (!this.wallLeft) {
            this.neighbours.push(tab[this.posX - 1][this.posY])
        }
    }
    createCase() {
        this.carre.style.width = this.tailleCase;
        this.carre.style.height = this.tailleCase;
        this.carre.style.backgroundColor = '#C9B6E4'


        if (this.wallUp) {
            this.carre.style.borderTop = 'solid 2px' + this.color
        }
        if (this.wallRight) {
            this.carre.style.borderRight = 'solid 2px' + this.color
        }
        if (this.wallDown) {
            this.carre.style.borderBottom = 'solid 2px' + this.color
        }
        if (this.wallLeft) {
            this.carre.style.borderLeft = 'solid 2px' + this.color
        }
        return this.carre
    }
    setbackgroundColor(couleur) {
        this.carre.style.backgroundColor = couleur;
    }
    setVisitedTrue() {
        this.visited = true;
        this.carre.style.backgroundColor = '#E1CCEC'
    }
}

class Start extends Case {
    start = true
    constructor(objet, taille) {
        super(objet, taille);
    }
    createCase() {
        super.createCase();
        this.carre.style.backgroundColor = '#F1F1F6'
        return this.carre
    }
}
class End extends Case {
    constructor(objet, taille) {
        super(objet, taille);
    }
    end = true
    createCase() {
        super.createCase();
        this.carre.style.backgroundColor = '#9B72AA'
        return this.carre
    }
}