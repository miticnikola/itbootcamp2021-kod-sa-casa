let getSomething = () => {
    return new Promise((resolve, reject) => {
        // resolve("Nesto resolved..")
        reject("Nesto rejected..");
    });
    /*
    let obj = new Promise();
    return obj;
    */
}

// console.log(getSomething());

// getSomethin vraca resolve ili reject
// Ako vrati resolve, izvrsava se then grana
// 
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});