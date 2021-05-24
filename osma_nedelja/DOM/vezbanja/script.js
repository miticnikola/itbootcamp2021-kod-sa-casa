// 
let paragrafi = document.querySelectorAll("p");

paragrafi.forEach(paragraf => {
    paragraf.innerHTML += ` VAZNO!!!`;
});

// 
let errorDiv = document.querySelectorAll("div.error");
errorDiv.forEach(div => {
    div.innerHTML = `<h1>Greska!</h1>` + div.innerHTML; // da bi naslov bio na pocetku
});

//
let n = paragrafi.length;

// for(let i = 0; i < n; i++){
//     paragrafi[i].innerHTML += (i + 1) ** 2;
// }

paragrafi.forEach((parag, i) =>{
    parag.innerHTML += (i+1) ** 2;
});

// svim slikama dodati alternativni text
let slike = document.querySelectorAll("img");
console.log(slike);

slike.forEach((slika, i) => {
    slika.setAttribute('alt', `slika ${i+1}`);
});

// svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom
paragrafi.forEach(paragraf => {
    paragraf.setAttribute('style', "color: purple");
});

// svim parnim paragrafima postaviti pozadinsku zelenu boju a svim neparnim paragrafima postaviti pozadinsku crvenu boju

paragrafi.forEach((paragraf, i) => {
    if(i % 2 == 0){
        paragraf.style.backgroundColor = "green";
    } else {
        paragraf.style.backgroundColor = "red";
    }
});

// svim linkovima postaviti padding 5px fsz 18px i text-dec: none. Parnim linkovima zelena pozadinska boja, i ljub boja texta, a neparnim plava pozadina i beo text

//prepravio sam od 8px na 18 zbog vidljivosti

let linkovi = document.querySelectorAll('a');

linkovi.forEach((link, i) => {
    link.setAttribute('style', 'padding: 5px; font-size: 18px; text-decoration: none;');

    if(i % 2 == 0){
        link.setAttribute('style', 'background-color: green; color: purple');
    } else {
        link.setAttribute('style', 'background-color: blue; color: white');
    }
});

// svim slikama sa extenzijom .png, postaviti okvir debljine 2px crvene boje

