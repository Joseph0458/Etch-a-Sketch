let gridSize = 16 * 16;

for (let i = 0; i < gridSize; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute("id", "gridSquare");
    container.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', function() {
      gridSquare.className = ("colored");
    });
}
