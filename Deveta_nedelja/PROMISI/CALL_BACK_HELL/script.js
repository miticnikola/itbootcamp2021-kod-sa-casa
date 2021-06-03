let getTodos = (resource, callBack) => {
    
    //1. Kreiranje XML objekta
    let request = new XMLHttpRequest();
    
    // 4.
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            // Ako je sve ok, tada je 4 i 200, i moze da dohvati response text
            // console.log(request.responseText);
            callBack(request.responseText, undefined); //umesto undefined moze i false
        } else if(request.readyState === 4){
            // console.log("Ne mogu da dohvatim podatke.");
            callBack(undefined, "Ne mogu da dohvatim podatke.");
        }
    });

    // 2. otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. saljemo request
    request.send();
}

// getTodos("../JSON/todos.json", () => {});

getTodos("../JSON/todos.json", (data, err) => {
    console.log("Callback okinuta");
    if(err){
        console.log(err); //Ispisuje gresku
    } else {
        console.log(data); //Ispisuje podatke sa kojima mozete dalje da raspolazete
        // Nakon sto se ucita todos.json, neka se ucita fruits.json
        getTodos("../JSON/fruits.json", (data, err) => {
            if(err){
                console.log(err);
            } else {
                console.log(data);
                //Nakon sto se ucita fruits.json, ucitati vegetables.json
                getTodos("../JSON/vegetables.json", (data, err) => {
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data);
                        getTodos("../JSON/cereals.json", (data, err) => {
                            if(err){
                                console.log(err);
                            } else {
                                console.log(data);
                            }
                        });
                    }
                });
            }
        });
    }
});

console.log("KRAJ");