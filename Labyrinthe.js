class Labyrinthe {
    tab = [];
    constructor(data, taille, exemple) {
        this.exemple = data[taille.toString()]['ex-' + exemple.toString()];
        this.taille = taille;
    }
    getExemple() {
        return this.exemple
    }
    createLab() {
        let board = document.createElement('div');
        board.setAttribute('id', 'board');
        board.style.width = (this.taille * 50) + 'px';
        board.style.height = (this.taille * 50) + 'px';
        board.style.border = 'solid 3px #696969'

        for (let elem of this.exemple) {
            if (elem.posX === 0 && elem.posY === 0) {
                var carre = new Start(elem, this.taille);
            } else if (elem.posX === (this.taille - 1) && elem.posY === (this.taille - 1)) {
                var carre = new End(elem, this.taille);
            } else {
                var carre = new Case(elem, this.taille);
            }

            if (this.tab[carre.posX] == undefined) {
                this.tab.push([])
            }
            this.tab[carre.posX].push(carre)

            board.append(carre.createCase());
        }
        document.querySelector('body').append(board);
    }
}