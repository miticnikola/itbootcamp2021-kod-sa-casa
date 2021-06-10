// Kreirati klasu Student koja ima atribute: jmbg, ime, prezime, nizOcena i presecna ocena.
// Prilikom kreiranja konstruktora, prosledjuje se jmbg, ime, prezime i nizOcena, a automatski se izračuna prosečna ocena ovog studenta. 
// Takođe, voditi računa o tome da svaka od unetih ocena može biti isključivo ceo broj i to 6, 7, 8, 9 ili 10.
// JMBG studenta mora biti string koji sadrži 13 karaktera.
// Izračunata prosečna ocena se dodeli atributu prosecna ocena.
// Napraviti i odgovarajuće getere i setere.
// Napraviti metodu ispis koja ispisuje sve podatke o jednom studentu.



class Student{
    constructor(jmbg, ime, prezime, nizOcena){
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.nizOcena = nizOcena;
        this.prosecnaOcena = this.prosecna();
    }

    // Seteri
    set jmbg(jmbg){
        if(jmbg.length == 13){
            this._jmbg = jmbg;
        } else {
            console.log(`JMBG mora imate 13 karaktera, vas ima ${jmbg.length} karaktera`);
        }
    }
    set ime(ime){
        this._ime = ime;
    }
    set prezime(prezime){
        this._prezime = prezime;
    }
    set nizOcena(nizOcena){
        for(let i = 0; i < nizOcena.length; i++){
            if(nizOcena[i] < 6 || nizOcena[i] > 10 || nizOcena[i] % 1 != 0){
                console.log( "Ocena nepravilna, ocena ne sme da bude manja od 6, a veca od 10");
                return this._nizOcena = [];
            } else {
                this._nizOcena = nizOcena;
            }
        }
    }

    // Geteri
    get jmbg(){
        return this._jmbg;
    }
    get ime(){
        return this._ime;
    }
    get prezime(){
        return this._prezime;
    }
    get nizOcena(){
        return this._nizOcena;
    }

       // Metode
    prosecna(){
        let suma = 0;
        console.log(this.nizOcena);
        for(let i = 0; i < this.nizOcena.length; i++){
            suma += this.nizOcena[i];    
        }
        return suma / this.nizOcena.length;
    }
    ispis(){
        console.log(this.jmbg, this.ime, this.prezime, this.nizOcena, this.prosecnaOcena);
    }
}

let student1 = new Student('1231992231233', "Pera", "Meric", [6, 7, 8, 10]);
let student2 = new Student('1231993231233', "Pera", "Peric", [7, 8, 9, 10, 10]);
let student3 = new Student('1231995231233', "Pera", "Zderic", [6, 7, 7, 8, 9,10]);
let student4 = new Student('1231992231233', "Pera", "Zderic", [6, 7, 6, 8, 9,10]);

console.log(student1, student2, student3);

student1.ispis();
student2.ispis();
student3.ispis();


// Napraviti niz studenata i koristiti ga u predstojećim funkcijama.
let studenti = [student1, student2, student3, student4];

// Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija vraća broj studenata sa tim imenom i prezimenom.
let imePrezime = (niz, ime, prezime) => {  // mislim da ovde fali niz paramerar u textu
    let brStud = 0;
    niz.forEach(student => {
        if(student.ime == ime && student.prezime == prezime){
            brStud++;
        }
    });
    return brStud;
}

console.log(imePrezime(studenti, "Pera", "Zderic"));

// Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svih ocena studenata.
let srednjaOcena = niz => {
    let sumaOcena = 0;
    let brOcena = 0;

    for(let i = 0; i < niz.length; i++){
        niz[i].nizOcena.forEach(ocena => {
            sumaOcena += ocena;
            brOcena++;
        })
    }
}
srednjaOcena(studenti);

// Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata. ============= O V O       ====       O D R A D I ============================









// Napraviti funkciju najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
    let najboljiStudent = niz[0];

    niz.forEach(student => {
        if(najboljiStudent.prosecnaOcena < student.prosecnaOcena){
            najboljiStudent = student;
        }
    });

    let minOcena = najboljiStudent.nizOcena[0];
    najboljiStudent.nizOcena.forEach(ocena => {
        if(minOcena > ocena){
            minOcena = ocena;
        }
    });

    document.body.innerHTML += `<h3>Najbolji student: ${najboljiStudent.ime} ${najboljiStudent.prezime}, <br> Njegova najmanja ocena: ${minOcena}<h3>`;
}
najmanjaOcenaNajboljeg(studenti);


// Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.
let najmanjaOcena = niz => {
    let najmanjaOcena = niz[0].nizOcena[0];

    niz.forEach(student => {
        student.nizOcena.forEach(ocena => {
            if(najmanjaOcena > ocena){
                najmanjaOcena = ocena;
            }
        });
    });
    return najmanjaOcena;
}

console.log(najmanjaOcena(studenti));


// Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali. == OVO ODRADI ================================================








// Napisati funiciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na ekranu ispisuje sve studente koji su rodjeni te godine. Godinu rođenja preuzeti (odrediti) iz JMBG-a studenta.
let rodjeniGodine = (niz, godina) => {
    let godinaStr = godina.toString();
    let god = godinaStr.slice(1, 4);
    let godBr = Number(god);
    
    niz.forEach(student => {
        if(student.jmbg.includes(godBr)){
            // console.log(godBr);
            document.body.innerHTML += `<h3 style="color: green;">${student.ime} ${student.prezime}</h3>`;
        }
    }); 
}
rodjeniGodine(studenti, 1992);

