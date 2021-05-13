// 1. Ispisati sve elemente niza od 5 stringova.
let el = ["jabuka", "kruska", "dunja", "dinja", "mango"];

for(i = 0; i < el.length; i++){
    console.log(el[i]);
}

// 2. Odrediti zbir elemenata celobrojnog niza.
let br = [12, 6, 18, 1, 9, 324];
let zbir = 0;

for(i = 0; i < br.length; i++){
    zbir += br[i];
}
console.log(zbir);

// 3. Odrediti proizvod elemenata celobrojnog niza.
let proiz = 1;

for(i = 0; i < br.length; i++){
    proiz *= br[i];
}
console.log(proiz);

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
console.log(zbir/br.length);

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVr = br[0];
for(i = 0; i < br.length; i++){
    if(maxVr < br[i]){
        maxVr = br[i];
    }
}
console.log(maxVr);

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
let minVr = br[0];
for(i = 0; i < br.length; i++){
    if(minVr > br[i]){
        minVr = br[i];
    }
}
console.log(minVr);

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
let maxBrIndex = 0;
maxVr = br[0];

for(i = 0; i < br.length; i++){
    if(maxVr < br[i]){
        maxVr = br[i];
        maxBrIndex = i;
    }
}
console.log(maxBrIndex);

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
minVr = br[0];
let minBrIndex = 0;

for(i = 0; i < br.length; i++){
    if(minVr > br[i]){
        minVr = br[i];
        minBrIndex = i;
    }
}
console.log(minBrIndex);

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let BrElNiza = 0;
let artSr = zbir / br.length;

for(i = 0; i < br.length; i++){
    if(artSr < br[i]){
        BrElNiza++;
    }
}
console.log(BrElNiza);

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPoz = 0;

for(i = 0; i < br.length; i++){
    if(br[i] > 0){
        zbirPoz += br[i];
    }
}
console.log(zbirPoz);

// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
let brParnih = 0;

for(i = 0; i < br.length; i++){
    if(br[i] % 2 == 0){
        brParnih++;
    }
}
console.log(brParnih);



                    //================== FUNKCIJE - zadaci za vezbu ========================

// 1. Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

function let(pSat, pMin, sSat, sMin){
    let polet = pSat * 60 + pMin;
    let slet = sSat * 60 + sMin;

    let duzinaLeta = slet - polet;

    if(duzinaLeta % 60 != 0){
        let h = Math.floor(duzinaLeta/60);
        let min = duzinaLeta % 60;

        if(h == 0){
            console.log(`Let je trajao ${min}min.`);
        } else if(duzinaLeta < 0){
            console.log("Ispravno unesite vrednosti za vreme poletanja i sletanja.");
        } else {
        console.log(`Let je trajao ${h}h i ${min}min.`);
        }

    } else {
        console.log(`Let je trajao ${h}h.`);
    }
}

let(12, 5, 16, 13);



// 2. Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičar jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

let jaban = (jabuka, banana) => {
    let loseJabuke = Math.round(jabuka * (20/100));
    let dobreJabuke = jabuka - loseJabuke;

    let porcijeSaJab = Math.floor(dobreJabuke / 2);
    let porcijeSaBan = Math.floor(banana / 3);
    console.log(porcijeSaBan, porcijeSaJab);

    if(porcijeSaBan > porcijeSaJab){
        console.log(`Moze se napraviti ${porcijeSaJab} jabana.`);
    } else {
        console.log(`Moze se napraviti ${porcijeSaBan} jabana.`);

    }


}

jaban(250, 200);
