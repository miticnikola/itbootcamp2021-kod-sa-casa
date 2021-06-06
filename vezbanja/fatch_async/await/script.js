// U svim predstojećim zadacima uzeti u obzir da je moguće i da je došlo do greške prilikom poziva fajla. Grešku do koje je došlo ispisati u konzoli.

// 1. Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)
let req = fetch("../JSON/fruits.json");

req.then(resolved => {
    return resolved.json();
}).then(data => {
    console.log(data);
    data.forEach(fruit => {
        if(fruit.name.includes("berries")){
            console.log(fruit.name);
        }
    })

}).catch(err => {
    console.log("Doslo je do greske", err);
});

// 2. U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)
let req1 = fetch("../JSON/fruits.json");

req1.then(resolved => {
    return resolved.json();
}).then(fruits => {
    let counter = 0;
    fruits.forEach(fruit => {
        if(!fruit.name.includes("berries")){
            counter++;
        }
    });
    console.log(`${counter} voca u svome imenu ne sadrzi rec berries`);
}).catch(err => {
    console.log(err);
})


// 3. Ispisati u konzoli najpre sve nazive voća iz fajla fruits.json, zatim u konzoli ispisati sve nazive povrća iz fajla vegetables.json (koristiti DOM, async i await).

let fruits = async() => {
    let fruits = await fetch("../JSON/fruits.json");

    if(fruits.status != 200){
        throw new Error("Ne mogu da dohvatim podatke");
    } else {
        let data = await fruits.json();
        return data;
        
        }

    }

let vegetables = async() => {
    let vegetables = await fetch("../JSON/vegetables.json");

    if(vegetables.status != 200){
        throw new Error("Ne mogu da dohvatim podatke");
    } else {
        let data = await vegetables.json();
        return data;
    }
}


// FRUITS
fruits()
.then(data => {
    data.forEach(fruit => {
        console.log(fruit.name);
    })
})
.catch(err => {
    console.log(err);
});

// VEGETABLES
vegetables().then(data => {
    data.forEach(vegetable => {
        console.log(vegetable.name);
    })
}).catch(err => {
    console.log(err);
});

// 4. Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u neuređenoj listi ispisati sve nazive voća iz fruits.json fajla. Potom ispisati naslov “Vegetables” iza koga sledi neuređena lista sa nazivima povrća iz vegetables.json fajla. (koristiti DOM, async i await).

let fruits1 = async() => {
    let fruits = await fetch("../JSON/fruits.json");
    
    if(fruits.status != 200){
        throw new Error("Ne mogu da dohvatim podatke");
    } else {
        let data = await fruits.json();
        return data;
    }  
}

// Fruits
fruits1()
.then(data => {
    let body = document.querySelector('body');
    let header3 = document.createElement('h3');
    header3.textContent = "Fruits";
    body.appendChild(header3);
    
    let ulFruits = `<ul>`;
    
    data.forEach(fruit => {
        ulFruits += `<li>${fruit.name}</li>`;
    })
    ulFruits += `</ul>`;
    
    body.innerHTML += ulFruits; 
    // appendChild() ne moze unutar promisa da se koristi?
    

    let zbirTezina = 0;
    data.forEach(fruit => {
        zbirTezina += fruit.weight;
    });
    body.innerHTML += `Tezina svog voca iznosi ${zbirTezina}kg`;
    return zbirTezina;
})
.catch(err => {
    console.log(err);
});

// Vegetables

let vegetables1 = async() => {
    let vegetables = await fetch('../JSON/vegetables.json');

    if(vegetables.status != 200){
        throw new Error("Ne mogu da dohvatim podatke");
    } else {
        let data = await vegetables.json();
        return data;
    }
}


vegetables1()
.then(data => {
    let body = document.querySelector('body');
    let header3v = document.createElement('h3');
    header3v.textContent = "Vegetables";
    body.appendChild(header3v);

    let ulVeg = `<ul>`;
    data.forEach(vegetable => {
        ulVeg += `<li>${vegetable.name}</li>`;
    })
    ulVeg += '</ul>';
    body.innerHTML += ulVeg;

    let zbirTezina = 0;
    data.forEach(vegetable => {
        zbirTezina += vegetable.weight;
    });
    body.innerHTML += `Zbir tezina svog povrca iznosi ${zbirTezina}kg`;
    return zbirTezina;

})
.catch(err => {
    console.log(err);
});


// 5. Nadovezati se na prethodni zadatak i nakon ispisane liste voća u paragrafu ispisati ukupnu težina svog voća u kilogramima. Zatim, ispod liste povrća u paragrafu ispisati ukupnu težinu povrća u kilogramima. Postaviti da asinhrona funkcija vraća zbir količina voća i povrća u kilogramima. Pri pozivu asinhrone funkcije, ispisati  ovu vrednost.
let fruitsVeg = async() => {
    let fruits = await fetch("../JSON/fruits.json");
    let sum = 0;

    if(fruits.status != 200){
        throw new Error("Ne mogu da preuzmem podatke");
    } else {
        let data = await fruits.json();

        data.forEach(fruit => {
            sum += fruit.weight;
        });
    }

    let vegetables = await fetch("../JSON/vegetables.json");

    if(vegetables.status != 200){
        throw new Error("Ne mogu da dohvatim podatke");
    } else {
        let dataV = await vegetables.json();
        
        dataV.forEach(vegetable => {
            sum += vegetable.weight;
        });
    }
    return sum;
}

fruitsVeg()
.then(sum => {
    let h4 = document.createElement('h4');
    h4.textContent = `Ukupna tezina voca i povrca je ${sum}kg`;
    document.body.appendChild(h4);
})
.catch(err => {
    console.log(err);
});