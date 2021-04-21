console.log('zadaci dodela vrednosti');

/* zadatak 1
Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
*/

let s = 12;
let m = 15;

let odPonoci = s*60 + m;
console.log(odPonoci);

let doPonoci = 24*60 - odPonoci;
console.log("Do ponoci je preostalo:" + doPonoci)

/* zadatak 2 
Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
*/
let satiOdponoci = Math.round(odPonoci/60);
let minutiOdPonoci = odPonoci%60;
console.log(satiOdponoci + ":" + minutiOdPonoci);

let minOdPonoci = 123;
let h = Math.floor(minOdPonoci/60); //1.Math.round zaokruzuje kao u matematici na najpriblizniji ceo broj, 2.Math.floor zaokruzuje na donji ceo broj, 3.Math.ceil zaokruzuje na gornji ceo broj.
let minut = minOdPonoci%60;
console.log(h + ":" + minut);

//2.nacin
minut = minOdPonoci % 60;
h = (minOdPonoci - minut)/60;
console.log(h + ':' + minut);

// Kraj drugog zadatka


/* Zadatak 3
Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
*/

let cena = 728;
let novac = 1000;
let kusur = novac - cena;
console.log(kusur);


/* Zadatak 4
Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
*/

/* let sat = 16;
let min = 5;
let sadaMin = sat*60 + min;
console.log(sadaMin);
*/

let datum = new Date();
console.log(datum);

let danUNedelji =  datum.getDay(); //vraca od 0 do 6 pri cemu je 0 nedelja
console.log(danUNedelji);
let danUMesecu = datum.getDate();
console.log(danUMesecu);

let satiSada = datum.getHours();
let minutiSada = datum.getMinutes();
console.log(satiSada*60 + minutiSada);

/* Zadatak 5
Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.
*/


let dd = datum.getDate();
let mm = datum.getMonth() + 1;
let yyyy = datum.getFullYear();
console.log(dd + '/' + mm + '/' + yyyy);


/* Zadatak 6
Konverzija valute iz evra u dinare (i obrnuto).
*/
let eu = 25;
let eu_din = 117.5;

// Evri u dinare
let eu_u_din = eu * eu_din;
console.log(eu_u_din);
// Dinari u evre
let din_u_eu = eu_u_din / eu_din;
console.log(din_u_eu);


/* Zadatak 7
Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 
*/

let eu_dol = 1.2;
// Evro u dolare, vrednost evra uzuimam iz prethodnog zadatka
let eu_u_dol = eu * eu_dol;
console.log(eu_u_dol);
// Dolazi u evre
let dol_u_eu = eu_u_dol / eu_dol;
console.log(dol_u_eu);

/* Zadatak 8 
Temperatura iz Celzijusa u Farenhajte i obrnuto.
*/

// Farenhajt iz celzijusa
let celzijus = 14;
let farenhajt = celzijus * 1.8 + 32;
console.log(farenhajt);

// Celzijus iz Farenhajta
let c1 = (farenhajt-32)/1.8;
console.log(c1);

/* Zadatak 9
Temperatura iz Celzijusa u Kelvine i obrnuto.
*/

//upotrebljavam stepene celzijusa iz prethodnog zadatka
let kelvin = celzijus + 273.15;
console.log(kelvin);
//kelvin u celzijus
let c2 = kelvin - 273.15;
console.log(c2);
