function makeGrid() {
  const gridContainer = document.querySelector('#grid-container');

  for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.id = 'row' + i;

    gridContainer.appendChild(gridSquare);
  }
}

makeGrid();


