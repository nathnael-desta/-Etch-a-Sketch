// Get the container element
const container = document.querySelector('.container');
const button = document.querySelector('button');

let column = 16;
let row = 16;
let filter = 100;
// Create 5 new div elements with similar names and append them to the container
function createGrid(){
  for (let i = 0; i < column; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(`div-h${i}`);
    newDiv.classList.add("horizontal")
    container.appendChild(newDiv);
    for (let j = 0; j < row;j++) {
      const otherDiv = document.createElement('div');
      otherDiv.classList.add(`div-v${i}${j}`);
      otherDiv.classList.add(`inner`)
      newDiv.appendChild(otherDiv);
    }
  }

  function classadder() {
    this.classList.add('hovered')
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = randomColor;

  }
  
  function classremover(block) {
    setTimeout( () => {
      this.style.backgroundColor = 'white';
      filter -= 10;
      if (filter > 0){
        this.setAttribute('style', `filter: brightness(90%);`)
      }
    },500)
    
  }
  
  
  const blocks = document.querySelectorAll(".inner");
  
  blocks.forEach( block => block.addEventListener('mouseenter', classadder));
  blocks.forEach( block => block.addEventListener('mouseleave', classremover));

}

createGrid();



function ask() {
  while (container.firstChild){
    container.removeChild(container.firstChild);
  }
  row = parseInt(prompt('Enter number of rows'));
  if (row > 100) {
    alert("choose a number less than 100");
    row = parseInt(prompt('Enter number of rows'));
  }
  column = parseInt(prompt('Enter number of columns'));
  if (column > 100) {
    alert("choose a number less than 100");
    column = parseInt(prompt('Enter number of rows'));
  }
  createGrid();
}

button.addEventListener('click', ask);