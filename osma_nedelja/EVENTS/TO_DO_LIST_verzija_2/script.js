let ulLista = document.querySelector('ul');
let listItems = document.querySelectorAll('li');
let forma = document.querySelector('form');
let inputUnosObaveze = document.getElementById('unosObaveze');
// let btnDodaj = document.getElementById('dodaj');
let radioDodajNaPocetak = document.getElementById('dodajNaPocetak');
let radioDodajNaKraj = document.getElementById('dodajNaKraj');


// btnDodaj.addEventListener('click', e => {
//     e.preventDefault();

//     let noviLi = document.createElement('li');
//     noviLi.textContent = inputUnosObaveze.value;
    
//     ulLista.appendChild(noviLi);
    
//     forma.reset();

// });

// console.log(ulLista);

// ulLista.forEach(item => {
//     item.addEventListener('click', () => {
//         ulLista.removeChild(item);
//     })
// });

// 1.NACIN
// kada dodamo novi LI nece raditi jer taj novi li nece imati event listener koji je vezan na njega

// listItems.forEach(li => {
//     li.addEventListener('click', e => {
//         console.log(e);
//         console.log(e.target); //vraca nam taj element na koji je kliknuto
//         e.target.remove();   
//      });
// });

// 2. NACIN - boobling
ulLista.addEventListener('click', e => {
    // console.log('Kliknuto na ul');
    // console.log(e); //tagName - vraca veliko LI i tako mora i da napisemo
    if(e.target.tagName == "LI"){
        // console.log('Kliknuto na li');
        e.target.remove();
    }
    
});

// btnDodaj.addEventListener('click', e => {    ===  ovo je kad ima button
//     e.preventDefault();

//     let noviZadatak = inputUnosObaveze.value;
//     let liNoviZadatak = document.createElement('li');
//     liNoviZadatak.textContent = noviZadatak;
    
//     ulLista.appendChild(liNoviZadatak);
    
//     // inputUnosObaveze.value = ""; ovo se pise da se isprazni input kada nemamo formu
//     forma.reset();

    inputUnosObaveze.addEventListener('keyup', e => {
    if(e.keyCode == 13){

        let noviZadatak = inputUnosObaveze.value;

        if(noviZadatak == '' || noviZadatak == null){
            alert('Morate uneti novu obavezu u listu obaveza.')
        } else {
            let liNoviZadatak = document.createElement('li');
            liNoviZadatak.textContent = noviZadatak;

            if(radioDodajNaPocetak.checked == true){
                ulLista.prepend(liNoviZadatak);
            } else {
                ulLista.appendChild(liNoviZadatak);
            }
            
            // forma.reset(); // radi samo kada imamo formu, ali forma je malo specificna, treba da se istrazi
        }
        inputUnosObaveze.value = "";
    }
});