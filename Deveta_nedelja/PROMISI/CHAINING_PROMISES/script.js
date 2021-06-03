let getTodos = resource => {
    
    //1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    return new Promise( (resolve, reject) => {

        // 2. otvaranje kreiranog zahteva
        request.open('GET', resource);

        // 3. saljemo request
        request.send();
        // 4.
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                // Ako je sve ok, tada je 4 i 200, i moze da dohvati response text
                // console.log(request.responseText);
                // callBack(request.responseText, undefined); //umesto undefined moze i false
                resolve(request.responseText);

            } else if(request.readyState === 4){
                // console.log("Ne mogu da dohvatim podatke.");
                // callBack(undefined, "Ne mogu da dohvatim podatke.");
                reject("Ne mogu da dohvatim podatke");
            }
        });
    });
    
}

getTodos('../JSON/fruits.json').then(data => {
    console.log('Promise fruits resolved', data); // da ne bi pisali 2 console loga i sa "promise resolved" i za data
    return getTodos('../JSON/fruits.json');
}).then(data => {
    console.log('Promise vegetables resolved', data);
    return getTodos('../JSON/cereals.json');
}).then(data => {
    console.log("Promise cereals resolved", data);
})
.catch(err => {
    console.log('Promise rejected', err);
});


console.log("KRAJ");