// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

// Napisati metode koje:
// Određuje i vraća prosečnu temperaturu izmerenu tog dana.

// Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.

// Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

// Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

let dan = {
    kisa: true,
    sunce: false,
    oblacno: true,
    temp: [ 0, 0, 0, 0, 0],
    prosek: function() {
        let zbir = 0;
        for(let i = 0; i < this.temp.length; i++){
            zbir += this.temp[i];
        }
        return zbir / this.temp.length;
    },
    brProsTemp: function(){
        let brPros = 0;
        for(let i = 0; i < this.temp.length; i++){
            if(this.temp[i] > this.prosek()){
                brPros += 1;
            }
        }
        return brPros;
    },
    tempIzmedju: function(tempOd, tempDo){
        let brMer = 0;

        for(let i = 0; i < this.temp.length; i++){
            if(this.temp[i] > tempOd && this.temp[i] < tempDo || this.temp[i] < tempOd && this.temp[i] > tempDo){
                brMer++;
            }
        }
        return brMer;
    },
    leden: function(){
        let led = true;
        
        this.temp.forEach(temp => {
            if(temp > 0){
                led = false;
            }  
        });
        return led;
    }
};


console.log(dan.prosek());
console.log(dan.brProsTemp());
console.log(dan.tempIzmedju(5, 13));
console.log(dan.leden());