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