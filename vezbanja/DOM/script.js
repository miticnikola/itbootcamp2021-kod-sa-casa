let paragrafi = document.querySelectorAll("p");

let prviErrorDiv = document.querySelector("div.error");

let poslednjiRed = document.querySelector("tr:last-child");

let slike = document.querySelectorAll("img");


console.log(paragrafi);
console.log(prviErrorDiv);
console.log(poslednjiRed);
console.log(slike);

// sEL SVE PARAGRAFE I U SVAKOM OD NJIH PRIDODATI TEXT VAZNO
paragrafi.forEach(paragraf => {
    paragraf.innerHTML += ` VAZNO`;
})
// svim divovima sa klasom error, dodati h1 sa txt Greska;
let errorDivovi = document.querySelectorAll(".error");

errorDivovi.forEach(div => {
    div.innerHTML = `<h1>GRESKA</h1>` + div.innerHTML;
})

// neka je n br parag u datom dokumentu. U svakom i-tom paragrafu dodati br i2, za svako i = 1, 2, .., n

// Svim slikama dodati alternativni text
slike.forEach((slika, i) => {
    slika.alt = `slika ${i + 1}`;
});

// Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom
paragrafi.forEach(paragraf => {
    paragraf.style.color = "purple";
});

// svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim crvenu
paragrafi.forEach((paragraf, i) => {
    if(i % 2 == 0){
        paragraf.style.backgroundColor = "green";
    } else {
        paragraf.style.backgroundColor = "red";
    }
});

// linkovima postaviti padd 5px fsz 18px text-decoration none, parnim linkovima zelena pozadina, ljubicasta boja, neparnim plava pozadina i bela boja
let linkovi = document.querySelectorAll('a');

linkovi.forEach((link, i) => {
    link.setAttribute("style", "padding: 5px; font-size: 18px; text-decoration: none;")

    if(i % 2 == 0){
        link.setAttribute("style", "color: purple; background-color: green");
    } else {
        link.setAttribute("style", "color: white; background-color: blue");
    }
});

// svim slikama sa ext .png postaviti okvir 2px i crvenu boju
slike.forEach(slika => {
    if(slika.src.includes(".png")){
        slika.style.border = "2px solid red";
    }
    
});

// svakom linku promeniti target: ako je _blank, staviti _top, a ako je bila neka vr razlicita od blank ili nije je bilo, postaviti _blank
linkovi.forEach(link => {
    if(link.target === "_blank"){ //idemo sa 3 znaka = jer se proverava i tip i vrednost
        link.target = "_top";
    } else {
        link.target = "_blank";
    }
});
