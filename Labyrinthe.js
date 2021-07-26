class Labyrinthe {

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

        for (let elem of this.exemple) {
            let carre = new Case(elem, this.taille);
            board.append(carre.createCase());
            console.log(carre)
        }
        document.querySelector('body').append(board);
    }
}