let enteredSize = 16;

function buildGrid() {
  let gridSize = enteredSize * enteredSize;
  let gridSquareSize = (500 / enteredSize) + "px";
  for (let i = 0; i < gridSize; i++) {
      let gridSquare = document.createElement("div");
      gridSquare.setAttribute("id", "gridSquare");
      container.appendChild(gridSquare);
      gridSquare.style.height = gridSquareSize;
      gridSquare.style.width = gridSquareSize;
      gridSquare.addEventListener('mouseover', function() {
        gridSquare.classList.add("colored");
      });
  }
}

buildGrid();

let reset = document.querySelector("#reset");
reset.addEventListener("click", function(e) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
  enteredSize = prompt("Enter new grid size: ");
  buildGrid();
});
