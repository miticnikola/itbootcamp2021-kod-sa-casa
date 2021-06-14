let divOrder = document.querySelector('#order');
let formOrder = document.querySelector('#order form');
let inputOrder = document.querySelector('#capacity');


function getItems(resource, func) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            func(data);

        } else if (this.readyState == 4) {
            console.log("Could not fetch data");
        }
    });
    request.open('GET', resource);
    request.send();
}

let click1 = e => {
    e.preventDefault();
    let capacity = inputOrder.value;
    // console.log(capacity);

    let itemsNoStock = [];
    getItems('JSON/stock.json', data => {
        // Logika da se dohvate objekti koji nisu na stanju
        data.forEach(item => {
            if (item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
        console.log(itemsNoStock);

        getItems('JSON/weights.json', data => {
            // logika za tezine artikala

            let totalWeight = 0;
            data.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    // Potrebna je tezina artikla
                    totalWeight += item.weight;
                }
            });
            // console.log(totalWeight);
            if (totalWeight > capacity) {

                let pMessage = document.createElement('p');
                pMessage.setAttribute('style', 'font-weight: bold; font-size: 24px;');
                pMessage.textContent = "Not enough capacity in truck!";
                divOrder.appendChild(pMessage);

            } else {
                getItems('JSON/prices.json', data => {


                    let totalPrice = 0;

                    data.forEach(item => {
                        if (itemsNoStock.includes(item.id)) {
                            totalPrice += item.price;
                            console.log(item.price);
                        }
                    });
                    let pMessage = document.createElement('p');
                    pMessage.setAttribute('style', 'font-weight: bold; font-size: 24px;');
                    pMessage.textContent = `Total order price: ${totalPrice} RSD`;
                    divOrder.appendChild(pMessage);
                });
            }
        });
    });
}


// Promise je objekat koji ceka asinhroni poziv
// Zahvaljujuci njemu postoje then() i catch() metode;
function getItemsReturnPromise(resource, func) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);

            } else if (this.readyState == 4) {
                reject("Could not fetch data");

            }
        });
        request.open('GET', resource);
        request.send();
    });

}

let click2 = e => {
    e.preventDefault();
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    getItemsReturnPromise('JSON/stock.json')
        .then(data => {
            data.forEach(item => {
                if (item.stock == 0) {
                    itemsNoStock.push(item.id);
                }
            });
            return getItemsReturnPromise('JSON/weights.json');
        })
        .then(data => {
            let totalWeight = 0;
            data.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    // Potrebna je tezina artikla
                    totalWeight += item.weight;
                }
            });
            // console.log(totalWeight);
            if (totalWeight > capacity) {

                let pMessage = document.createElement('p');
                pMessage.setAttribute('style', 'font-weight: bold; font-size: 24px;');
                pMessage.textContent = "Not enough capacity in truck!";
                divOrder.appendChild(pMessage);

            }
            else {
                return getItemsReturnPromise('JSON/prices.json');
            }
        })
        .then(data => {
            // BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
            if (data !== undefined) {
                let totalPrice = 0;
                data.forEach(item => {
                    if (itemsNoStock.includes(item.id)) {
                        totalPrice += item.price;
                        console.log(item.price);
                    }
                });

                table = document.createElement('table');
                table.setAttribute('style', 'border-collapse: collapse;');

                data.forEach(item => {

                    if (itemsNoStock.includes(item.id)) {
                        let row = document.createElement('tr');
                        let td1 = document.createElement('td');
                        td1.textContent = item.item;

                        row.appendChild(td1);
                        table.appendChild(row);


                        let td2 = document.createElement('td');
                        td2.textContent = item.price;
                        row.appendChild(td2);
                    }

                });
                let row1 = document.createElement('tr');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');

                td3.textContent = "UKUPNO"
                td4.textContent = totalPrice;

                row1.appendChild(td3);
                row1.appendChild(td4);
                table.appendChild(row1);

                document.body.appendChild(table);

                let td = table.querySelectorAll('td');

                td.forEach(t => {
                    t.setAttribute("style", "border: 1px solid green; padding: 5px; text-transform: uppercase;");

                });
            }
        })
        .catch(err => {
            console.log(err);
        });
}

// formOrder.addEventListener('submit', click2);

async function clickGetItems(){
    // Ovde radimo nesto sa podacimo iz stock.json
    let data1 = await getItemsReturnPromise('JSON/stock.json');
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    data1.forEach(item => {
        if (item.stock == 0) {
            itemsNoStock.push(item.id);
        }
    });
    // Ovde radimo nesto sa podacimo iz weights.json
    let data2 = await getItemsReturnPromise('JSON/weights.json');
    let totalWeight = 0;
    data2.forEach(item => {
        if (itemsNoStock.includes(item.id)) {
            // Potrebna je tezina artikla
            totalWeight += item.weight;
        }
    });
    // console.log(totalWeight);
    // let pMessage = document.createElement('p');
    table = document.createElement('table');
    if (totalWeight > capacity) {
        let tdError = document.createElement('td');
        tdError.setAttribute('style', 'font-weight: bold; font-size: 24px;');
        tdError.textContent = "Not enough capacity in truck!";

        table.appendChild(tdError);

    }
    else {
        // Ovde radimo nesto sa podacimo iz prices.json
        let data3 = await getItemsReturnPromise('JSON/prices.json');
        let totalPrice = 0;
                data3.forEach(item => {
                    if (itemsNoStock.includes(item.id)) {
                        totalPrice += item.price;
                        console.log(item.price);
                    }
                });

                // table = document.createElement('table');
                table.setAttribute('style', 'border-collapse: collapse;');

                data3.forEach(item => {

                    if (itemsNoStock.includes(item.id)) {
                        let row = document.createElement('tr');
                        let td1 = document.createElement('td');
                        td1.textContent = item.item;

                        row.appendChild(td1);
                        table.appendChild(row);


                        let td2 = document.createElement('td');
                        td2.textContent = item.price;
                        row.appendChild(td2);
                    }

                });
                let row1 = document.createElement('tr');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');

                td3.textContent = "UKUPNO"
                td4.textContent = totalPrice;

                row1.appendChild(td3);
                row1.appendChild(td4);
                table.appendChild(row1);

                // divOrder.appendChild(table);

                let td = table.querySelectorAll('td');

                td.forEach(t => {
                    t.setAttribute("style", "border: 1px solid green; padding: 5px; text-transform: uppercase;");

                });
    }
    return table;
}

let click3 = event => {
    event.preventDefault();
    clickGetItems()
    .then(para => {
        divOrder.appendChild(table);
    })
    .catch(err => {
        console.log(err);
    });
}

formOrder.addEventListener('submit', click3);

