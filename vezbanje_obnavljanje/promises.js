let p = new Promise ((resolve, rejected) => {
    let p = 1 + 1;

    if(p != 2){
        resolve('Success');
    } else {
        rejected('Faild');
    }
});

p.then(message => {
    console.log('Ovo je uspesno: ' + message);
})
.catch(message => {
    console.log('Ovo je neuspesno: ' + message);
});



//Prevent Callback hall (Callback to promise)
// let userLeft = true;
// let userWatching = false;

// let watchTut = (callback, errorCallback) => {
//     if(userLeft){
//         errorCallback({
//             name: 'User left',
//             message: ':('
//         })
//     } else if(userWatching){
//         errorCallback({
//             name: 'User watch memes',
//             message: 'MemeMemeMemeMeme'

//         })
//     } else {
//         callback('Approved');
//     }
// };

// // Dve callback funkcije unutar funkcije watchTut
// watchTut((success) => {
//     console.log(`Success: ${success}`);
// },
//  (error) => {
//      console.log(`!!!Error!!! Name: ${error.name}, message: ${error.message}.`);
//  });




// From callback hell to promise

 let userLeft = false;
 let userWatching = true;

 let watchTutProm = () => {
     return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: 'User left',
                message: ':('
            })
        } else if(userWatching){
            reject({
                name: 'User watch memes',
                message: 'MemeMemeMemeMeme'
            })
        } else {
            resolve('Approved');
        }
     })
 };


watchTutProm()
.then(success => {
    console.log(`Succes: ${success}`);
})
.catch(error => {
    console.log(`!!!Error!!! Name: ${error.name}, message: ${error.message}.`);});



// Promise.all()

let promise1 = 3;
let promise2 = Promise.resolve(3);
// Isto je kao i:
// let promise2 = new Promise(resolve => {
//     resolve(3);
// });

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

console.log(promise2);

Promise.all([promise1, promise2, promise3]).then(success => {
    console.log(success);
});