// create a div
let myDiv = document.createElement('div');

// set attributes of my div
myDiv.setAttribute('id', 'newDiv');
myDiv.setAttribute('class', 'box');

// Create text node
let divContent = document.createTextNode('We are creating a new div!');
// Above is equivalent
// myDiv.innerText = 'We are creating a new div!';

myDiv.appendChild(divContent);

document.body.appendChild(myDiv);

let newParagraph = document.createElement('p');
newParagraph.setAttribute('id', 'newParagraph');
newParagraph.innerHTML = '<strong>This is my paragraph</strong>';

myDiv.appendChild(newParagraph);

let button = document.createElement('button');
button.setAttribute('id', 'myButton');
button.setAttribute('class', 'myButton'),
    button.innerHTML = 'Click me';

myDiv.insertBefore(button, newParagraph);

let p = document.createElement('p');
myDiv.appendChild(p);

button.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255); // random devuelve un numero aleatorio entre 0 y 1
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    button.style.color = `rgb(${r},${g},${b})`;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    myDiv.style.backgroundColor = `rgb(${r},${g},${b})`;

    p.innerText = `Div bg conlor is r:${r} g:${g} b:${b}`;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

})