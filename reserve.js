if (pos.wallRight === false) {
    if (y !== (longueur - 1) && laby.tab[x][y + 1].visited === false) {
        y++
    } else {
        if (pos.wallLeft === false) {
            y--
        } else if (pos.wallUp === false) {
            x--
        } else {
            x++
        }
    }
} else if (pos.wallDown === false) {
    if (x !== (longueur - 1) && laby.tab[x + 1][y].visited === false) {
        x++
    } else {
        if (pos.wallLeft === false) {
            y--
        } else if (pos.wallUp === false) {
            x--
        } else {
            y++
        }
    }
} else if (pos.wallUp === false) {
    if (x !== 0 && laby.tab[x - 1][y].visited === false) {
        x--
    } else {
        if (pos.wallLeft === false) {
            y--
        } else if (pos.wallDown === false) {
            x++
        } else if (pos.wallLeft == true && pos.wallDown == true && pos.wallRight == true) {
            x--
        } else {
            y++
        }
    }
} else {
    y--
}
//colorer en vert la case sur laquelle on est pour laisser une trace de son passage
if (x < longueur && y < longueur) {
    laby.tab[x][y].setVisitedTrue();
    if (laby.tab[x][y].visited == true) {
        laby.tab[x][y].setbackgroundColor('#32CD32')
    }
    console.log(laby.tab);

    // donner a position sa nouvelle valeur
    position = laby.tab[x][y];
}

if (x == longueur - 1 && y == longueur - 1) {
    window.alert('et voila !')
}
console.log(position);











// ------------------------------------------------------------
let x = 0;
let y = 0;
let position = laby.tab[x][y];

console.log(position);
const chemin = [];

document.getElementById("avancer").addEventListener("click", () => resolveLab(position));

function resolveLab(pos) {
    let tempX = laby.moveX(pos, x, y);
    let tempY = laby.moveY(pos, x, y);
    if (laby.isCulDeSac(x, y) || laby.isVisited(x, y)) {
        y = tempY
        if (y == position.posY) {
            x = tempX
        }
    } else {
        x = tempX
        if (x == position.posX) {
            y = tempY
        }
    }


    // donner a position sa nouvelle valeur
    position = laby.tab[x][y];

    if (x == longueur - 1 && y == longueur - 1) {
        window.alert('et voila !')
    }
    console.log(position);
}
// l'algo ne fonctionne pas quand les embranchements son trop complexes
// la prochaine étape consiste a regarde s'il y a un embranchement
// si c'est le cas, on sauvegarde la position et on continue normalement
// si le chemin aboutis a un cul de sac, on reviens a la position sauvegardée
// et on met en rouge le chemin précédemment parcourru

// pour ça il faudra a chaque fois stocker la case que l'on parcourt dans un tableau
// lors d'un embranchement on stocke le parcours dans un autre tableau.
// si tout va bien on fusionne ce tableau au principal
// si ça va pas on met tout en rouge et on reprend a la derniere donnée
// du tableau principal et on part ailleurs (en utilisant une fonction de déplacement
// qui prend en compte la couleur rouge d'une case)