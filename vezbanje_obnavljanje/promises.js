let p = new Promise((resolve, rejected) => {
    let p = 1 + 1;

    if (p != 2) {
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
        if (userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if (userWatching) {
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
        console.log(`!!!Error!!! Name: ${error.name}, message: ${error.message}.`);
    });



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

// console.log(promise2);

Promise.all([promise1, promise2, promise3]).then(success => {
    console.log(success);
});


// Make HTTP request == fetching api

// Fetch title and id
let api = fetch("https://jsonplaceholder.typicode.com/posts");

// console.log(api);

api
    .then(response => {
        return response.json();
    })
    .then(json => json.forEach(file => {
        document.body.innerHTML +=
            `
    <p style="border: 1px solid green; margin: 10px; padding: 10px 5px;">
        <span>${file.id})</span>
        ${file.title}
        </p>
        `;
    }))
    .catch("ERROR: Something go wrong");


// Fetch photos === Making cards with photos
let imgs = fetch('https://jsonplaceholder.typicode.com/photos');

imgs
.then(response => response.json())
.then(json =>
    json.forEach(file => {
        if (file.id < 20) {

            let div = document.createElement('div');
            // div.id = 'card';

            div.setAttribute('style', 'border: 1px solid gray; text-align: center; color: red; width: 60%; margin: 0 auto;padding: 10px;margin-top: 10px; background-color: khaki;')

            let title = document.createElement('h4');
            // title.id = 'title';
            title.innerText = `${file.title}`;

            let image = document.createElement('img');
            image.src = `${file.url}`;
            image.setAttribute('style', 'width: 70%; border: 2px dotted aqua;')


            div.appendChild(title);
            div.appendChild(image);

            document.body.appendChild(div);


        }
    })
);