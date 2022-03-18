const container = document.createElement('div')
const background = document.createElement('div')
const hSlider = document.getElementById('heightSlider')
const hInput = document.getElementById('heightInput')
const createGrid = document.getElementById('createGrid')
const clearGrid = document.getElementById('clearGrid')
container.classList.toggle('container-active')
document.body.appendChild(background)
background.appendChild(container)
background.setAttribute('id','background')

window.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    container.classList.toggle('container-inactive')
  }
})

createGrid.addEventListener('click', () => {
  updateGrid();


})
clearGrid.addEventListener('click', () => {
  clear('row');
  clear('square');

})

hSlider.oninput = () => {
  hInput.value = hSlider.value;
  updateGrid();
}
hInput.oninput = () => {
  hSlider.value = hInput.value;
  updateGrid();
}

container.addEventListener('mouseenter', () => {
  const squares = document.getElementsByClassName('square')
  for (const item of squares) {
    item.style.border = 'solid rgba(255, 255, 255, 0.5) 1px'
  }
})

function updateGrid() {
  clear('row');
  clear('square');
  let gridHeight = hSlider.value
  let gridWidth = gridHeight
  drawGrid(gridHeight, gridWidth);
}

function createRow() {
  const row = document.createElement('div')
  row.setAttribute('class', 'row')
  row.setAttribute('id', `row${i}`)
  container.appendChild(row)
}

function fillSquares() {
  const squares = Array.from(document.getElementsByClassName('square'))
  for (const item of squares) {
    item.addEventListener('mouseover', function draw() {
      item.style.backgroundColor = 'rgb(18,53,36)';
      item.style.transitionDuration = '1s';
    })
  }
}

function clear(className) {
  const remItems = Array.from(document.getElementsByClassName(className));
  for (const name of remItems) {
    name.remove();
  }

}

function drawGrid(height, width) {
  for (i = 0; i < height; i++) {
    createRow();
  }
  const rows = Array.from(document.getElementsByClassName('row'))
  for (const item of rows) {
    for (i = 0; i < width; i++) {
      const square = document.createElement('div')
      square.setAttribute('class', 'square')
      square.setAttribute('id', `square${i}`)
      item.appendChild(square)
    }
    fillSquares();
  }

}

function navSquares() {
  container.addEventListener('keydown', () => {
    if (e.key == 'ArrowUp') {}
    if (e.key == 'ArrowLeft') {}
    if (e.key == 'ArrowDown') {}
    if (e.key == 'ArrowRight') {}
  })
}
