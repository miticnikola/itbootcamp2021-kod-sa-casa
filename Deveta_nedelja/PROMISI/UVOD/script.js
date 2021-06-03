//1. Kreiranje XML objekta
let request = new XMLHttpRequest();

// 4.
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        // Ako je sve ok, tada je 4 i 200, i moze da dohvati response text
        console.log(request.responseText);
    } else if(request.readyState === 4){
        console.log("Ne mogu da dohvatim podatke.");
    }
});

// 2. otvaranje kreiranog zahteva
request.open('GET', "JSON/todos.json");

// 3. saljemo request
request.send();




//////////////////

// Primer callBackfunkcija

// Funkcija myFunc prima kao parametar drugu funkciju (callBackFunction)
// myFunc moze da poziva funkciju koja joj je prosledjena kao paramerat i prosledjuje argumente
let myFunc = callbackFunction => {
    let value = 5;
    callbackFunction(value);
    // ne treba praktikovati da se koristi promenljiva koja se nalazi izvan same funkcije
}

// Kada pozivamo funkciju myFunc ona ocekuje da joj se prosledi druga funkcija tj mi joj prosledjujemo realizaciju callbackFunction funkcije (telo funkcije).
myFunc(value => {
    console.log(value); // mozemo parametar value ovde da nazovemo i abvg, on ce nam vratiti vrednost koja je prosledjena u gore napisanoj istoj myFunc();
})


let myFunc1 = callbackFunction => {
    let value1 = 5;
    let value2 = 6;
    callbackFunction(value1, value2);
}

myFunc1((val1, val2) => {
    console.log(val1 + val2);
})