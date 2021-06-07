import generateImage from "./modules/general.js";
import {generateList, generateListItem} from "./modules/list.js";
import {generateTable, generateTableRow, generateTableItem} from "./modules/table.js";

let img1 = document.body.appendChild(generateImage('images/0.jpg'));
let img2 = document.body.appendChild(generateImage('images/1.jpg'));
let img3 = document.body.appendChild(generateImage('images/2.jpg'));
let img4 = document.body.appendChild(generateImage('images/3.jpg'));


let ul = generateList(document.body);

let li = generateListItem(ul, 'images/0.jpg');
let li1 = generateListItem(ul, 'images/1.jpg');
let li2 = generateListItem(ul, 'images/2.jpg');
let li3 = generateListItem(ul, 'images/3.jpg');


let table = generateTable(document.body);
let row = generateTableRow(table);

// moze ovako da se pristupa slikama
// let td = generateTableItem(row, 'images/0.jpg');
// let td1 = generateTableItem(row, 'images/1.jpg');
// let td2 = generateTableItem(row, 'images/2.jpg');
// let td3 = generateTableItem(row, 'images/3.jpg');

// moze i ovako da se pristupa slikama
for(let i = 0; i <= 3; i++){
    let td = generateTableItem(row, `images/${i}.jpg`);
}