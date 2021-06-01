// Kreiranje HTTP zahteva:
let request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     if(request.readyState == 1){
//       console.log("Uspostavljena konekcija!");  
//     } else if(request.readyState == 2){
//         console.log("Poslat zahtev serveru!");  
        
//     } else if(request.readyState == 3){
//         console.log("Odgovor je ustatusu preuzimanja!");
//     } else if(request.readyState == 4){
//         console.log("Preuzet je odgovor sa servera, u potpunosti!");
//         console.log(request.responseText);
//     }
// });

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){
        let odgovor = request.responseText; // odgovor je uvek string
        let odgovorJS = JSON.parse(odgovor); // da se string pretvori u objekat

        console.log(odgovor);
        console.log(odgovorJS);
    } else if(request.readyState === 4){
        console.log("Nemoguce je dobriti odgovor od servera");
    }
})

request.open("GET", 'https://jsonplaceholder.typicode.com/posts/2'); // uspostavljanje konekcije  (0 -> 1)
request.send(); // slanje HTTP zahteva (1 -> 2)

console.log("Nesto posle 1");
console.log("Nesto posle 2");