let pr = 4;
let pr2 = 50;
if(pr < 10){
    pr = "0" + pr;
}

if(pr2 < 10) {
    pr2 = "0" + pr2;
}

console.log(pr); //pozziv funkcije log
console.log(pr2); //pozziv funkcije log

// Definicija - telo funkcije

function mojaFunkcija(){
    console.log("Zdravo svete");
} //ovde na kraju ne ide tacka-zarez jer to nije komanda


console.log("Neki tekst pre poziva funkcije.");

// Poziv funkcije
mojaFunkcija();

console.log("Neki tekst posle poziva funkcije.");

// Ponovni poziv funkcije
mojaFunkcija();


// Definicija druge funkcije
function ispisiText(tekst){
    console.log("Ispisujem tekst: " + tekst); //parametar tekst
}

// Pozivi funkcije
ispisiText("ITBootcamp"); // prilikom poziva funkcije prosledjuje se neka vrednost (ovde je prosledjen string).
ispisiText(`Pera Peric`);
ispisiText(25);

let x = "Mika";
ispisiText(x);

console.log(x);
// console.log(text);

let tekst = "Zika"; // globalna promenljiva
console.log(tekst); //ovo nije parametar text, nego globalna promenljiva



function test(x){
    if(x % 2 == 0) {
        var y = "Paran"; //function scope = promenljiva vazi unutar funkcije
    } else {
        let z = "Neparan"; // let - block scope (promenljiva vazi unutar bloka). Const je isto kao let
    }
    console.log(x);
    console.log(y);
    console.log(z);
}
test(5);
console.log(y);
