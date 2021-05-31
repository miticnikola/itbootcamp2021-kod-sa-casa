// console.log(window);
console.log("Prva linija koda");
console.log("Druga linija koda");
setTimeout(test, 1000); // kada se funkcija upisuje kao parametar to je callBack funkcija
console.log("Cetvrta linija koda");
console.log("Peta linija koda");

// window.setTimeout(); // najispravnije je da se pise ovako jer window prosledjuje setTImeout funkciju, ali radice  u JS i bez window.

function test(){
    console.log("Pozvana je f-ja test");
}

////////////////////
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn1.addEventListener('click', () => { // arrow call-back funkcija //svejedno da li je anonimna, arrow, ili imenovana funkcija
    console.log(this); // ovde nam poziva window

});

btn2.addEventListener('click', function(){    //anonimna funkcija callback funkcija
    console.log(this); //ovde nam poziva btn2
});

btn3.addEventListener('click', klik);

function klik(){     //imenovana callback funkcija
    console.log(this); //ispisuje btn3
}

klik(); // ispisuje window

//Razlika kod obicnih anonimnih i arrow funkcija je ta da, u arrow funkciji ne moze da se kaze this, jer u njima vraca window, a u anonimnim function(){} koristi se jer se odnosi na objekat.





/////////////================================================================////////////
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let divIspis = document.getElementById('ispis');
let clock = null;

b1.addEventListener('click', () => {
    if(clock === null){
        clock = setTimeout(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekundi = datum.getSeconds();
            // let milisek = datum.getMilliseconds();
            divIspis.innerHTML += `${sati}:${minuti}:${sekundi}`;
        }, 1000);
    }
});

b2.addEventListener('click', () => {
    clearTimeout(clock);
    clock = null;
});