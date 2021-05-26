// Zadatak 1
let start = 9*60;
let end = 17*60;

let date = new Date();

let hour = date.getHours();
let min = date.getMinutes();

let currentTime = hour * 60 + min;

let rest = end - currentTime;
// console.log(rest);

if(currentTime >= start && currentTime < end){
    if(rest % 60 != 0){
        let restH = Math.floor((end - currentTime)/60);
        let restMin = rest % 60;

        if(restH == 0){
            console.log(`Cvecarki je ostalo do kraja radnog vremena ${restMin}min`)
        } else {
        console.log(`Cvecarki je ostalo do kraja radnog vremena ${restH}h i ${restMin}min`);
        }

    } else {
        let restH = Math.floor(rest/60);
        console.log(`Cvecarki je ostalo do kraja radnog vremena ${restH}h`);
    }
} else if(currentTime < start){
    console.log(`Radno vreme jos uvek nije pocelo.`);
} else if(currentTime >= end){
    console.log(`Radno vreme je vec zavrseno.`);
}


