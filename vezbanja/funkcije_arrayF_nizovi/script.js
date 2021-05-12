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