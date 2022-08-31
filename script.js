//Function to create 256 divs
function makeGrid() {
  const gridContainer = document.querySelector('#grid-container');

  for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('drawSquare');
    gridSquare.innerText = i;
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'black';
    })

    gridContainer.appendChild(gridSquare);
  }
}

makeGrid();


