let dan = {
    datum: "2021/05/19",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperatura: [10, 13, 17, 20, 25, 27, 23, 19, 16, 27, 12],
    // 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
    prosecna: function(){
        let suma = 0;
        this.temperatura.forEach(temp => {
            suma += temp;
        });
        return suma / this.temperatura.length;
    },
    // 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecna: function(){
        let brMer = 0;
        // for(let i = 0; i < this.temperatura.length; i++){
        //     if(this.temperatura[i] > this.prosecna()){
        //         brMer++;
        //     }
        // }
        // return brMer;
        this.temperatura.forEach(temp => {
            if(temp > this.prosecna()){
                brMer++;
            }            
        });
        return brMer;
    },
    // 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maksimalna: function(){
        let brMax = 0;
        let max = this.temperatura[0];

        this.temperatura.forEach(temp => {
            if(max < temp){
                max = temp;
            }
        });
        return max;
    },
    brMaxMerenja: function(){
        let brMax = 0
        this.temperatura.forEach(temp => {
            if(temp == this.maksimalna()){
                brMax++;
            }
        });
        return brMax;
    },
    // 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    brMerIzmedju: function(temp1, temp2){
        if(temp1 > temp2){
            let avg = temp1;
            temp1 = temp2;
            temp2 = avg;
        }

        let temp = this.temperatura;
        let brMer = 0;
        temp.forEach(t => {
            if(t > temp1 && t < temp2){
                brMer++;
            } 
            // else if(t > temp2 && t < temp1){
            //     brMer++;
            // }
        });
        return brMer;
    },
    // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
    tempIznadProseka: function(){
        let polovinaMerenja = this.temperatura.length / 2;
        
        if(this.natprosecna() > polovinaMerenja){
            return true;
        } else {
            return false;
        }
    },
    // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function(){
        let temp = this.temperatura;
        for(let i = 0; i < temp.length; i++){
            if(temp[i] >= 0){
                return false;
            }
        }
        return true;
    },
    leden1: function(){
        let temp = this.temperatura;
        let leden = true;

        for(let i = 0; i < temp.length; i++){
            if(temp[i] >= 0){
                leden = false;
                break;
            }
        }
        return leden;
    },
    // 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropski: function(){
        let temp = this.temperatura;
        let tropski = true;

        for(let i = 0; i < temp.length; i++){
            if(temp[i] < 24){
                tropski = false;
                break;
            }
        }
        return tropski;
    },
    // 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio 
// nepovoljan, u suprotnom vraća false.
    nepovoljan: function(){
        let temp = this.temperatura;
        for(let i = 0; i < temp.length; i++){
            if(Math.abs(temp[i] - temp[i + 1]) > 8){
                return true;
            }
        }
        return false;
    },
    // 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajen: function(){
        let temp = this.temperatura;
        for(let i = 0; i < temp.length; i++){
            if(temp[i] < -5 && this.kisa == true || this.oblacno == true && temp[i] > 25 || this.kisa == true && this.oblacno == true && this.sunce == true){
                return true;
        }
    }
    return false;
    }
};

// 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
console.log(dan.prosecna());
// 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(`Bilo je ` + dan.natprosecna() + ` meranja sa natprosecnom temperaturom.`);
// 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maksimalna());
console.log(dan.brMaxMerenja());
// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.brMerIzmedju(12, 22));
// 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
console.log(dan.tempIznadProseka());

// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.leden());
console.log(dan.leden1());

// 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropski());

// 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio 
// nepovoljan, u suprotnom vraća false.
console.log(dan.nepovoljan());
// 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
console.log(dan.neuobicajen());
