console.log(db);

// Pristup kolekciji
let coll1 = db.collection('customers');
console.log(coll1);

// Pristup dokumentu
let doc1 = coll1.doc('customer-02');
console.log(doc1);

let doc2 = db.doc('customers/customer-01'); //isto pristupanje kao u 8 liniji, samo je u zagradama stavljena fizicka putanja do tog dokumenta // 15 slajd
console.log(doc2);

/*
Za pristup dokumentu koristimo:
let doc = db.collection('...).doc('...');

Kod dokumenata imamo sledece metode:
CRUD(Create, Read, Update, Delete)
doc.set(...)        ->  Create
doc.get(...)        ->  Read
doc.update(...)     ->  Update
doc.detele(...)     ->  Delete

BILO KOJA OD OVE CETIRI METODE VRACAJU PROMISE.
Nakon poziva potrebno je lancati .then() i .catch
*/


// 1.Create
let c3 = {
    name: "Mika",
    age: 38,
    addresses: ["Loznica", "Cacak"],
    salary: 406.23
}; // JS objekat -> Na osnovu njega zelimo dokument u bazu

db.collection('customers').doc('customer-04')
.set(c3)
.then(function(){
    console.log("Uspesno dodat dokument u kolekciju customers");
})
.catch(err => {
    console.log(`Greska prilikom dodavanja dokumenta:` + err);
});



let date1 = new Date("2021-06-15 11:15:00");
let date2 = new Date("2021-06-15 13:00:00");

db.collection('tasks').doc('task-02')
// .set({
    // title: "Voznja bicikla",
    // start_date: firebase.firestore.Timestamp.fromDate(date1), //moze i ovako ali moze i samo medjupromenljiva da se napise
    // due_date: date2,
    // priority: false,
    // description: "Rekreacija pred ITBootcamp cas"
.update({
    level: 'easy'
}, {merge: true})
.then(() => {
    console.log("Uspesno dodat dokument");
})
.catch(err => {
    console.log(`Greska: ${err}`);
});
