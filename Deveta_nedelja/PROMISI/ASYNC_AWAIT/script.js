// fetch vraca promise -- asocijacija na promise je then i catch
// Upada u catch granu samo ako je doslo do network error-a

// Sled od 4 koraka
// 1. fetch .json fajla
// 2. retrurn response.json koji je promise
// 3. uzeti podatke iz response.json 
// 4. catch error


fetch("../JSON/todos.json").then(response => {
    // response je objekat koji nosi sa sobom veliki broj atributa
    console.log('resolved', response);
    return response.json(); //response.json() je promise, i zbog toga mora opet da se radi than i catch
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log("rejected", err);
});


// ASYNC & AWAIT
// dok se ne izvrsi prethodni kod u toj niti da se ne nastavi izvrsavanje koda u toj istoj niti dok se ne ispostuje redosled

// Asinhrona funkcija se prosledjuje kao parametar i ima zagrade
// Asinhrona funkcija ispred zaagrada mora da ima async
// Kao rezultat vraca promise
let getTodos = async() => {
    let response = await fetch("../JSON/todos.json"); // vraca response zbog cega smo ranije koristili then i catch
    // await = "cekaj" dok se ne izvrsi komanda koja je iza await (Zaustavi izvrsavanje koda u ovj niti dokle god se ne izvrsi komanda koja je iza await);
    // Await moze da se koristi iskljucivo u asinhronoj funkciji
    // console.log(response);
    if(response.status != 200){
        // console.log("Nastala je greska");
        throw new Error("Ne mogu da dohvatim podatke");
    } else {
        let data = await response.json(); // response.json() vraca promise
    }



    // sa ovim delom krecem tek kada su prethodne linije izvrsene u potpunosti
    response = await fetch("../JSON/fruits.json");
    data = await response.json();
    return data; //vracam promise sto znaci da cu za njega morati da radim .then i .catch
}

console.log(1);
console.log(2);
getTodos().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
console.log(3);
console.log(4);

// Pisanje u koda u jednoj liniji
// getTodos()
// .then(data => console.log(data)
// ).catch(err => console.log(err));