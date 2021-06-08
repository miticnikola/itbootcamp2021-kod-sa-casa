export class Pacijent{
    constructor(i, v, t){
    this.ime = i;
    this.visina = v;
    this.tezina = t;
    }
    
    // Seters
    set ime(x){
        this._ime = x;
    }
    set visina(x){
        if(x > 0 && x < 2.5){
            this._visina = x;
        } else {
            this._visina = 0;
        }
    }
    set tezina(x){
        if(x > 0 && x < 550){
            this._tezina = x;
        } else {
            this._tezina = 0;
        }
    }
    
    // Geters
    get ime(){
        return this._ime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina;
    }

    Stampaj(){
        console.log(`Ime pacijenta: ${this.ime}, Visina: ${this.visina}, Tezina: ${this.tezina}`);
    }
    Bmi(){
        return this.tezina / this.visina**2;
    }
    Kritican(){
        if(this.Bmi() < 15 || this.Bmi() > 40){
            return true;
        }
        else {
            return false;
        }
    }
}