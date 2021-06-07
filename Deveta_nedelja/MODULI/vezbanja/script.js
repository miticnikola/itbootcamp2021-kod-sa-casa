// import generateImage from "./modules/general.js";
// import {generateList, generateItem as generateListItem} from "./modules/list.js";
// import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";

// console.log(generateImage('images/0.jpg'));

// document.body.appendChild(generateImage('images/0.jpg'));
// document.body.appendChild(generateImage('images/1.jpg'));
// document.body.appendChild(generateImage('images/2.jpg'));
// document.body.appendChild(generateImage('images/3.jpg'));

// let ul = generateList(document.body);
// let li = generateListItem(ul, 'images/0.jpg');
// let li2 = generateListItem(ul, 'images/1.jpg');
// let li3 = generateListItem(ul, 'images/2.jpg');
// let li4 = generateListItem(ul, 'images/3.jpg');

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// // let tableItem = generateTableItem();

// for(let i = 0; i <= 3; i++){
//     generateTableItem(tr, `images/${i}.jpg`);
// }

import generateImage from "./modules/general.js";
import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

console.log(generateImage('images/0.jpg'));

document.body.appendChild(generateImage('images/0.jpg'));
document.body.appendChild(generateImage('images/1.jpg'));
document.body.appendChild(generateImage('images/2.jpg'));
document.body.appendChild(generateImage('images/3.jpg'));

let ul = List.generateList(document.body);
let li =  List.generateItem(ul, 'images/0.jpg');
let li2 = List.generateItem(ul, 'images/1.jpg');
let li3 = List.generateItem(ul, 'images/2.jpg');
let li4 = List.generateItem(ul, 'images/3.jpg');

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
// let tableItem = generateTableItem();

for(let i = 0; i <= 3; i++){
    Table.generateItem(tr, `images/${i}.jpg`);
}
