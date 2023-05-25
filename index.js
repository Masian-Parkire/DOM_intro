document.getElementsByClassName('body')
document.getElementById('body').style.backgroundColor='#808080';
document.getElementById('title').style.color='green'
document.getElementById('fruity').style.textTransform = 'uppercase';
document.getElementById('fru').style.textTransform = 'uppercase';

let addfruit = document.getElementById('fruList');
let newFruit = document.createElement('li');
newFruit.textContent = 'Pineapple';
addfruit.appendChild(newFruit);


let addvegetable = document.getElementById('vegList');
let newVeggie = document.createElement('li');
newVeggie.textContent = 'Cabbages';
addvegetable.appendChild(newVeggie)