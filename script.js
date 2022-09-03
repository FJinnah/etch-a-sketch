const gridContainer = document.querySelector('#gridContainer');
//Function to create 256 divs
function makeGrid() {

  for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('drawSquare');
    // gridSquare.innerText = i;
    gridContainer.appendChild(gridSquare);
    //This part changes the background colour of each div to black when the user hovers over it
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'black';
    })

  }
}
makeGrid();

//Clear the grid
const clearGrid = document.querySelector('#clearButton');
clearGrid.addEventListener('click', () => {
  const selectGrid = document.querySelectorAll('.drawSquare');
  selectGrid.forEach(function() {
    let removal = document.querySelector('.drawSquare');
    gridContainer.removeChild(removal);
  })
})

//Set new grid
const newGrid = document.querySelector('#gridButton');
newGrid.addEventListener('click', buttonPrompt);
function buttonPrompt() {
  const selectGrid = document.querySelectorAll('.drawSquare');
  selectGrid.forEach(function() {
    let removal = document.querySelector('.drawSquare');
    gridContainer.removeChild(removal);
  })
  const userInput = prompt('Please select a grid size between 1 and 100.');
  const finalNumber = parseInt(userInput);
  if (finalNumber >= 1 && finalNumber <= 100) {
    gridContainer.style.gridTemplateColumns = `repeat(${finalNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${finalNumber}, 1fr)`;
    for (let i = 0; i < (finalNumber ** 2); i++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('drawSquare');
      gridContainer.appendChild(gridSquare);
      //This part changes the background colour of each div to black when the user hovers over it
      gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
      })  
    }
  } else {
    buttonPrompt();

  }
}

const newRainbow = document.querySelector('#rainbowButton');
newRainbow.addEventListener('click', rainbowPrompt);
function rainbowPrompt() {
  const selectGrid = document.querySelectorAll('.drawSquare');
  selectGrid.forEach(function() {
    let removal = document.querySelector('.drawSquare');
    gridContainer.removeChild(removal);
  })
  const userInput = prompt('Please select a grid size between 1 and 100.');
  const finalNumber = parseInt(userInput);
  if (finalNumber >= 1 && finalNumber <= 100) {
    gridContainer.style.gridTemplateColumns = `repeat(${finalNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${finalNumber}, 1fr)`;
    for (let i = 0; i < (finalNumber ** 2); i++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('drawSquare');
      gridContainer.appendChild(gridSquare);
      //This part changes the background colour of each div to black when the user hovers over it
        gridSquare.addEventListener('mouseover', () => {
          let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
          gridSquare.style.backgroundColor = randomColor;
      })  
    }
  } else {
    buttonPrompt();

  }
}
