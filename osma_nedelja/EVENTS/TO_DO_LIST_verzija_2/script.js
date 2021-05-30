let ulLista = document.querySelector('ul');
let listItems = document.querySelectorAll('li');
let forma = document.querySelector('form');
let inputUnosObaveze = document.getElementById('unosObaveze');
let btnDodaj = document.getElementById('dodaj');


btnDodaj.addEventListener('click', e => {
    e.preventDefault();

    let noviLi = document.createElement('li');
    noviLi.textContent = inputUnosObaveze.value;
    
    ulLista.appendChild(noviLi);
    
    forma.reset();

});

// console.log(ulLista);

// ulLista.forEach(item => {
//     item.addEventListener('click', () => {
//         ulLista.removeChild(item);
//     })
// });