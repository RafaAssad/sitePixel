let preta = document.querySelector("#black");
let vermelha = document.querySelector("#red");
let verde = document.querySelector("#green");
let azul = document.querySelector("#blue");
let white = document.querySelector("#white");
let grey = document.querySelector("#grey");
let brown = document.querySelector("#brown");

function removeClassSelected(){
    const corDaPaleta = document.querySelectorAll(".color");
    for(let i = 0; i < corDaPaleta.length; i++){
        corDaPaleta[i].classList.remove('selected');
    }
}


let selectedColor = "black";
function getBlackColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'black'
}

preta.addEventListener('click', getBlackColor);

function getRedColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'red';
}
vermelha.addEventListener('click', getRedColor);

function getGreenColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'green';
}

verde.addEventListener('click', getGreenColor);

function getBlueColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'blue';
}

azul.addEventListener('click', getBlueColor);

function getWhiteColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'white';
}

white.addEventListener('click', getWhiteColor);

function getGreyColor(e){
  let element = e.target;
  removeClassSelected();
  element.classList.add('selected');
  selectedColor = 'grey';
}

grey.addEventListener('click', getGreyColor);

function getBrownColor(e){
  let element = e.target;
  removeClassSelected();
  element.classList.add('selected');
  selectedColor = 'rgb(100, 14, 14)';
}

brown.addEventListener('click', getBrownColor);

//pixel board

let pickPixel = document.querySelector('#pixel-board');

function changePixelColor(e){
    let pixel = e.target;
    pixel.style.backgroundColor = selectedColor;
}

pickPixel.addEventListener('click', changePixelColor);

//botao de limpar

const board = document.getElementById('pixel-board');

let buttonClear = document.getElementById('clear-board');


function clearBoard(){
    const clear = document.getElementsByClassName('pixel');
    for (let i = 0; i < clear.length; i += 1) {
      clear[i].style.backgroundColor = 'white';
    }
  }
  

buttonClear.addEventListener('click', clearBoard);

let pixelBoard = document.querySelector("#pixel-board");

function createBoardLines() {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel firstLine blank';
    pixelBoard.appendChild(pixelLine);
  }
  
  function createBoardColumns() {
    const pixelColumn = document.createElement('div');
    pixelColumn.className = 'pixel blank';
    pixelBoard.appendChild(pixelColumn);
  }
  
  function createGridOfPixel(size) {
    if (parseInt(size, 10) < 5) {
      size = 5;
    } else if (parseInt(size, 10) > 50) {
      size = 50;
    }
    pixelBoard.innerHTML = '';
    for (let line = 1; line <= size; line += 1) {
      createBoardLines();
      for (let column = 2; column <= size; column += 1) {
        createBoardColumns();
      }
    }
  }

  let boardSize = document.querySelector("#board-size");

  function changeSize() {
    const size = boardSize.value;
    if (size.length == '') {
      alert('Valor Nulo');
    } else {
      createGridOfPixel(size);
    }
  }

  let genButton = document.querySelector('#generate-board')

  genButton.addEventListener('click', changeSize);
  window.addEventListener('load', createGridOfPixel(5));