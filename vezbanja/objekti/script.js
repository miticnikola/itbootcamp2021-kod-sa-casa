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
    }

}

// 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
console.log(dan.prosecna());
// 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(`Bilo je ` + dan.natprosecna() + ` meranja sa natprosecnom temperaturom.`);
// 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maksimalna());
console.log(dan.brMaxMerenja());
