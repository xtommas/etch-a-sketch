function initializeGrid(size){
    let gridContainer = document.querySelector(".grid");
    let currentRow = -1;
    for(let i = 0; i<size*size; i++){
        if(i%size === 0){
            currentRow++;
            let row = document.createElement("div");
            row.classList.add("row");
            let rowId = "row" + currentRow;
            row.setAttribute("id", rowId);
            gridContainer.appendChild(row);
        }
        let rowId = "row" + currentRow;
        let row = document.getElementById(rowId);
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (500 / size) + "px";
        square.style.height =  (500 / size) + "px";
        square.addEventListener("mouseover", (e) =>{
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            e.target.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        });
        row.appendChild(square);
    }
}

let gridSize = 16;
initializeGrid(gridSize);

const button = document.querySelector("button");
button.addEventListener("click", () =>{
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "";
        square.parentElement.removeChild(square);
    });
    gridSize = Number(prompt("Enter grid size:", "16"));
    while(gridSize<1 || gridSize>64){
        gridSize = Number(prompt("Enter grid size:", "16"));
    }
    initializeGrid(gridSize);
});