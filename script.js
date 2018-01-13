//write a function that creates divs. Then change it to do a row based off
//a column input of 16. Upadate that to multiple rows based off an input
//of 16.

let numCols = 16;
let numRows = 16;

for (let i = 0; i < numCols; i++) {
   let col = document.createElement("div");
  container.appendChild(col);
  for (let j = 0; j < numRows; j++) {
    let row = document.createElement("div");
    container.appendChild(row);
  }
}
