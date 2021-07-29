
const size = 6;
const maze = mazeData[size]["ex-2"]
let direction;
let domCell;
let i = 0;
let j = 1;


const position = (domCell, cell) => {

    if (cell.posX == 0 && cell.posY == 0) {
        domCell.style.backgroundColor = '#05DFD7';

    }
}

const endPosition = (domCell, posX, posY) => {
    if (posX === size - 1 && posY === size - 1) {
        domCell.style.backgroundColor = "#FA7F72";
    }
}

const player = (playerPositionX, playerPositionY) => {
    const domPlayer = document.getElementById("player")
    domPlayer.style.top = playerPositionY * 25 + "px"
    domPlayer.style.left = playerPositionX * 25 + "px"
}


function createMaze() {
    maze.forEach(cell => {
        i++

        domCell = document.createElement("div")
        domCell.setAttribute("id", i)
        domCell.setAttribute("class", "wall")

        domCell.style.left = cell.posX * 25 + "px"
        domCell.style.top = cell.posY * 25 + "px"
        domCell.style.backgroundColor = '#0F3460';

        if (cell.walls[0]) {
            domCell.style.borderTop = "solid"
            domCell.style.color = "#FAF3F3"

        }
        if (cell.walls[1]) {
            domCell.style.borderRight = "solid"
            domCell.style.color = "#FAF3F3"
        }
        if (cell.walls[2]) {
            domCell.style.borderBottom = "solid"
            domCell.style.color = "#FAF3F3"

        }
        if (cell.walls[3]) {
            domCell.style.borderLeft = "solid"
            domCell.style.color = "#FAF3F3"
        }

        position(domCell, cell);
        endPosition(domCell, cell.posX, cell.posY)
        document.querySelector("#maze").append(domCell)
    })
}
createMaze()



const getNeighbour = (mazes, currentPos) => {

    let neighbours = []
    for (let i = 0; i < currentPos.walls.length; i++) {

        if (!currentPos.walls[i]) {
            if (i === 0) {
                let y = currentPos.posY - 1
                let x = currentPos.posX
                let top = mazes.find(el => el.posX === x && el.posY === y)

                neighbours.push(top)

            }
            else if (i === 1) {
                let y = currentPos.posY
                let x = currentPos.posX + 1
                let right = mazes.find(el => el.posX === x && el.posY === y)


                neighbours.push(right)

            }
            else if (i === 2) {
                let y = currentPos.posY + 1
                let x = currentPos.posX
                let bot = mazes.find(el => el.posX === x && el.posY === y)

                neighbours.push(bot)


            }
            else if (i === 3) {
                let y = currentPos.posY
                let x = currentPos.posX - 1
                let left = mazes.find(el => el.posX === x && el.posY === y)

                neighbours.push(left)

            }
        }
    }

    return neighbours
}

let parents = [];
const dfsIterative = async (mazes, startCell, size) => {

    let stackss = [];

    stackss.push(startCell);
    console.log(startCell)

    while (stackss.length !== 0) {
        // let v = stackss.shift()
        let v = stackss.pop()
        let domId = document.getElementById(v.id)

        await sleep(200)
        if (domId.id = v.id) {
            player(v.posX, v.posY)
            domId.style.backgroundColor = '#9B72AA';
        }

        v.visited = true

        if (v.posX === size - 1 && v.posY === size - 1) {

            return console.log("end", v)
        }

        let neighbours = getNeighbour(mazes, v)

        for (let neighbour of neighbours) {

            j = neighbour.id

            if (neighbour.visited === false) {
                parents[neighbour.id] = v.id
                stackss.push(neighbour)
            }
        }
    }
}


maze.map(x => {
    x.visited = false;
    x.id = j++
    return x;
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



setTimeout(async function () {

    await dfsIterative(maze, maze[0], size);
    let lastKey = Object.keys(parents)
    goodWay(lastKey[lastKey.length - 1])

}, 0)



const goodWay = async (childId) => {
    let child = parents[childId]
    await sleep(200)
    if (child !== undefined) {
        document.getElementById(child).style.backgroundColor = "#FFC947"
        goodWay(child)
    }
}


document.addEventListener('keydown', (e) => {


    const oCase = cases[playable.getX() + "x" + playable.getY()];
    e.preventDefault(true)
    switch (e.key) {
        case "ArrowLeft":
            if (maze.walls[3])
                break;
            playable.goToDirection("LEFT")
            break;
        case "ArrowUp":
            if (maze.walls()[0])
                break;
            playable.goToDirection("TOP")
            break;
        case "ArrowRight":
            if (maze.walls()[1])
                break;
            playable.goToDirection("RIGHT")
            break;
        case "ArrowDown":
            if (maze.walls()[2])
                break;
            playable.goToDirection("BOTTOM")
            break;
    }
});
