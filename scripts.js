// GRID MAKER BELOW

const container = document.getElementById("container")

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridItem";
    };
  };

  
  makeRows(16, 16);

  // GRID MAKER ABOVE

const cells = document.querySelectorAll(".gridItem");
const clearBtn = document.getElementById("clearBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const greyBtn = document.getElementById("greyBtn");
const colourBtn = document.getElementById("colourBtn");

cells.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "black";
}));

function clearHighlight(e) {
    cells.forEach(gridItem => gridItem.style.backgroundColor = "rgba(0, 0, 0, 0");
};

function clearGrid() {
    const parent = document.getElementById("container")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
      
};

clearBtn.addEventListener('click',() => {
    clearGrid();    
    clearHighlight();
    container.style.setProperty('--grid-rows', 0);
    container.style.setProperty('--grid-cols', 0);
    let x = prompt("How much Etch do you want to Sketch? (0 - 100)");
        if (x > 100) {
            alert("Please input a number between 0 & 100");
            return;
        }; 
    makeRows(x, x);
    const cells = document.querySelectorAll(".gridItem");
    cells.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "black";
    }));
    rainbowBtn.addEventListener('click',() => {    
        cells.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor;
        }));
        ;    
    });
    colourBtn.addEventListener('input',() => {
        let theColour = colourBtn.value;    
        cells.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = theColour;
        }));
        ;    
    }, false);   
});

rainbowBtn.addEventListener('click',() => {    
    cells.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    }));
    ;    
});


colourBtn.addEventListener('input',() => {
    let theColour = colourBtn.value;    
    cells.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = theColour;
    }));
    ;    
}, false);



