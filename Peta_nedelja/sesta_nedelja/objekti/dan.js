let dan = {
    datum: "2021/05/17",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [15, 19, 20, 21, 29, 13, 11],
    // 1. Metoda: Odredjuje prosecnu temperaturu izmerenu tog dana
    prosecna: function(){
        let suma = 0;
        this.temperature.forEach( temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    },
    natprosecna: function(){
        let avg = this.prosecna();
        let br = 0;
        this.temperature.forEach(el => {
            if(el > avg){
                br++;
            }
        });
        return br;
    },
    // 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maksimalna: function(){
        let temp = this.temperature;
        let max = temp[0];
        let brMax = 0;

        temp.forEach(elem =>{
            if(max < elem){
                max = elem;
            }
        });

        temp.forEach(elem => {
            if(elem == max){
                brMax++;
            }
        })
        return brMax;
    },
    // 3. zadatak -- jelenin nacin // posle for petlje, radila je i sa forEach petljom
    maksimalna1: function(){
        let maks = this.temperature[0];
        for(let i = 0; i < this.temperature.length; i++){
            if(maks < this.temperature[i]){
                maks = this.temperature[i];
            }
        }
        return maks;
    },
    brojMaximalnih: function(){
        let max = this.maksimalna1();
        let brMax = 0;
        this.temperature.forEach(temp => {
            if(temp == max){
                brMax++;
            }
        });
        return brMax;
    },
    // 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    btw: function(temp1, temp2){
        // Ukoliko je temp1 > temp2, treba da zamene mesta
        if(temp1 > temp2) {
            let tmp = temp1;//tmp = temporary
            temp1 = temp2;
            temp2 = tmp;
        }

        let temp = this.temperature;
        let brBtw = 0;
        temp.forEach(elem => {
            if(elem > temp1 && elem < temp2){
                brBtw++;
            } //moze i ovde else if da se postavi umesto da se pise gore if sa tmp;
        });
        return brBtw++;
    },
    // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    iznadProseka: function(){
        let temp = this.temperature;
        let brIznadProseka = this.natprosecna();
        let polovinaMerenja = temp.length / 2;

        if(brIznadProseka > polovinaMerenja){
            return true;
        } else {
            return false;
        }        
    },
    //5. zadatak 
    vecinomNatrposecna: function(){
        let iznad = this.natprosecna();
        let ispod = this.temperature.length - iznad;

        return iznad > ispod;

        // if(iznad > ispod){
        //     return true;
        // } else {
        //     return false;
        // }
    },
    // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

    // minTemp: function(){
    //     let temp = this.temperature;
    //     let minTemp = temp[0];

    //     temp.forEach(temp => {
    //         if(minTemp > temp){
    //             minTemp = temp;
    //         }
    //     });
    //     return minTemp;
    // },
    // ledenDan: function(){
    //     if(this.minTemp() <= 0 && this.maksimalna <= 0){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // },


    // 6 zadatak jedan jelenin nacin sa casa
    ledenDan1: function(){
        let leden = true;
        this.temperature.forEach(el => {
            if(el >= 0){
                leden = false;
            }
        });
        return leden;
    },
    // 6 zadatak drugi jelenin nacin sa casa == NAJLAKSI
    ledenDan2: function(){
        for(i = 0; i < this.temperature.length; i++){
            if(this.temperature[i] >= 0){
                return false;
                }
            }
            return true;
        },
    // 6 zadatak drugi jelenin nacin sa casa == NAJPRAKTICNIJI za dalju primenu, jer leden moze da se ponovo upotrebi
    ledenDan3: function(){
        let leden = true;
        for(let i = 0; i < this.temperature.length; i++){
            if(this.temperature[i] >= 0){
                leden = false;
                break;
                }
            }
            return leden;
        },
// 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropskiDan: function(){
        let tropskeTemp = 0;
        for(let i = 0; i < this.temperature.length; i++){
            if(this.temperature[i] >= 24){
                tropskeTemp++;
            }
        }
        
        if(tropskeTemp == this.temperature.length){
            return true;
        } else {
            return false;
        }
    },
    // 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    nepovoljanDan: function(){
        for(let i = 0; i < this.temperature.length - 1; i++){
            
            let prvoMerenje = this.temperature[i];
            let drugoMerenje = this.temperature[i + 1];
            
            if(Math.abs(prvoMerenje - drugoMerenje) > 8){
                return true;
            }
        }
        return false;

    }
};



// ================== ISPIS REZULTATA =======================

// 1. Metoda: Odredjuje prosecnu temperaturu izmerenu tog dana
console.log(dan.prosecna());

// 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.natprosecna());

// 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maksimalna());
console.log(dan.brojMaximalnih());

// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.btw(25, 13)); //zahvaljujuci uslovu gore moze da se i zamene mesta temperaturama

// 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
console.log(dan.iznadProseka());
console.log(dan.vecinomNatrposecna());

// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
// console.log(dan.minTemp());
console.log(`1 nacin sa casa - ` + dan.ledenDan1());
console.log(`2 nacin sa casa - ` + dan.ledenDan2());
console.log(`3 nacin sa casa - ` + dan.ledenDan3());

// 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropskiDan());
// 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
console.log(dan.nepovoljanDan());