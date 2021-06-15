// db.collection('customers').doc('customer-01')
// .get()
// .then(doc => {
//     if(doc.exists){
//         let t = doc.data();
//         console.log(t);
//     }
//     else {
//         console.log(`No document with id: ${doc.id}`);
//     }
// })
// .catch(err => {
//     console.log(`Doslo je do greske: ${err}`);
// })

// // Dohvatanje svih dokumentata iz kolekcije
// db.collection('customers')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         // console.log(`Document ${doc.id}: ${doc.t}`);
//         console.log(t);
//         console.log(id);

//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

// dohvatanje svih dokumenata iz kolekcije u nekom redosledu

// dohvatanje svih dokumenata iz kolekcije u nekom redosledu
// isto kao malopre samo se sortira po vise polja

// // Sortitani prikaz dokumenata kolekcije
// db.collection('users')
// .orderBy('surname', 'asc')
// .orderBy('name', 'asc') //za svaki order by mora da se formira index
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}: ${t}`);
//         console.log(t);
//         console.log(id);

//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

// Dohvatanje ogranicenog broja dokumenata iz kolekcije
// Odredjuje s epozivom limit(x) - x je broj elemenata koji zelimo da prikazemo
// db.collection('users')
// .orderBy('surname', 'asc')
// .orderBy('name', 'asc') //za svaki order by mora da se formira index
// .limit(2) // limit radi i nezavisno od orderBy, samo on ne moze vis eputa da s eponavlja, samo jendom se pise , i on se pise na kraju 
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}: ${t}`);
//         console.log(t);
//         console.log(id);

//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

// Dohvatanje dokumenata iz kolekcije koji zadovoljavaju odredjene usleve (filtriranje dokumenata)
// DOhvati sve korisnike mladje od 30 godina
// db.collection('customers')
// // .where('age', '>=', 30) 
// // .orderBy('age', 'asc')

// //----- mogu da se kombinuju po razlicitim poljima, ali to povlaci, 
// // .orderBy('name', 'desc') //za svaki order by mora da se formira index
// // 1.da se sva polja navedena u where, nalaze i u orderBy /
// // 2. Da postoji kompozitni index za sv apolja i redoslede navedene u order by
// // .limit(2)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}: ${t}`);
//         console.log(t);
//         console.log(id);

//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });




// Dohvatiti sve korisnike cija je adresa u NIsu
// db.collection('customers')
// .where('addresses', 'array-contains', 'Nis')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}: ${t}`);
//         console.log(t);
//         console.log(id);

//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });







// // Dohvatitit sve korisnike koji imaju 25 ili 31 godinu
// db.collection('customers')
// .where('age', 'in', [25, 31])
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}: ${t}`);
//         console.log(t);
//         console.log(id);

//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });







// Dohvatiti sve korisnike koji zive u NIsu ili Loznici
// db.collection('customers')
// .where('addresses', 'array-contains-any', ['Nis', 'Loznica'])
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Document ${id}: ${t}`);
//         console.log(t);
//         console.log(id);

//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });




//  VEZBANJA

// CUSTOMERS

// Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u Nišu,
db.collection('customers')
.where('addresses', 'array-contains', 'Nis')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(`${t.name} ima prebivaliste u Nisu`);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
})


// Imaju platu veću ili jednaku od 500,
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(`${t.name} ima platu vecu od 500, i ona iznosi ${t.salary}`);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
})
// Imaju platu između 300 i 800,
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(`${t.name} ima paltu vecu od 300, a manju od 800 i ona iznosi ${t.salary}`);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
})
// Imaju platu manju od 900, i imaju 30 godina, 
db.collection('customers')
.where('salary', '<', 900)
.where('age', '==', 26) //nemam nikog od 30 god pa sam zadao 26
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(t);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
});


// Imaju adresu u Nišu ili Beogradu,
db.collection('customers')
.where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(`Adrese korisnika ${t.name} su: ${t.addresses}`);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
});

// Imaju 22, 25 ili 28 godina.
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(`${t.name} ima ${t.age} godina`);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
});

//TASKS
// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
db.collection('tasks')
.orderBy('title', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(t.description);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
})

// Iz kolekcije tasks, pročitati sve zadatke, i koji:
// Su prioritetni,
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(`Priority: true, ima zadatak ${t.title}`);
    });
})
.catch(err => {
    console.log(`ERROR: ${err}`);
});

// Treba da se izvrše u tekućoj godini,
let sada = new Date();
let godina = sada.getFullYear();
let datum1 = new Date(godina, 0, 1); //prvi januar tekuce godine //godina, mesec, datum
let datum2 = new Date(godina + 1, 0, 1); //prvi januar sledece godine

// let datum = new Date('2021-12-31 23:59:59');

db.collection('tasks')
.where('due_date', '<', datum2)
.where('due_date', '>=', datum1)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        console.log(t);
    });
})
// Su završeni,
// Tek treba da počnu.



