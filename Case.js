class Case {
    color = '#334257';
    tailleCase = "50px";
    constructor(objet, taille) {
        this.posX = objet.posX;
        this.posY = objet.posY;
        this.wallUp = objet.walls[0];
        this.wallRight = objet.walls[1];
        this.wallDown = objet.walls[2];
        this.wallLeft = objet.walls[3];
        this.taille = taille
    }
    createCase() {
        let carre = document.createElement('div');
        carre.style.width = '50px';
        carre.style.height = '50px';
        carre.style.backgroundColor = '#476072'
        if (this.wallUp) {
            carre.style.borderTop = 'solid 2px' + this.color
        }
        if (this.wallRight) {
            carre.style.borderRight = 'solid 2px' + this.color
        }
        if (this.wallDown) {
            carre.style.borderBottom = 'solid 2px' + this.color
        }
        if (this.wallLeft) {
            carre.style.borderLeft = 'solid 2px' + this.color
        }
        if (this.posX === 0 && this.posY === 0) {
            carre.style.backgroundColor = '#EEEEEE'
        }
        if (this.posX === (this.taille - 1) && this.posY === (this.taille - 1)) {
            carre.style.backgroundColor = '	#BEAEE2'
        }
        return carre
    }
}