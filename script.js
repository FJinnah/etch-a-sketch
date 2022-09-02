const gridContainer = document.querySelector('#grid-container');
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
  const userInput = prompt('Please select a grid size between 1 and 100.');
  if (userInput >= 1 && userInput <= 100) {
    gridContainer.style.gridTemplateColumns = 'repeat(userInput, auto)';
    gridContainer.style.gridTemplateRows = 'repeat(userInput,auto)';
    for (let i = 0; i < userInput; i++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('drawSquare');
      // gridSquare.innerText = i;
      gridContainer.appendChild(gridSquare);
      //This part changes the background colour of each div to black when the user hovers over it
      gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
      })  
    }
  } else {
    const userInput = prompt('Please select a grid size between 1 and 100.');

  }
}


// const button = document.querySelector('#gridButton');
// button.addEventListener('click', buttonPrompt);
// function buttonPrompt() {
//   const userInput = prompt('Please select a grid size (maximum of 100)');
//   const gridSize = 500 / parseInt(userInput);
//   // return gridSize;  
//   const gridContainer = document.querySelector('#grid-container');

//   for (let i = 0; i < gridSize; i++) {
//     let gridSquare = document.createElement('div');
//     gridSquare.classList.add('drawSquare');
//     // gridSquare.innerText = i;
//     //This part changes the background colour of each div to black when the user hovers over it
//     gridContainer.appendChild(gridSquare);
    
//     gridSquare.addEventListener('mouseover', () => {
//       gridSquare.style.backgroundColor = 'black';
//     })

//   }
// }

