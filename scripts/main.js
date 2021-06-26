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
        row.appendChild(square);
    }
}

let gridSize = 16;
initializeGrid(gridSize);