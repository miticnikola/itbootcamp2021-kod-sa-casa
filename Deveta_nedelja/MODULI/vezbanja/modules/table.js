import generateImage from "./general.js";

let generateTable = parent => {
    let table = document.createElement('table');
    table.style.border = "1px solid black";

    parent.appendChild(table);

    return table;
}

let generateTableRow = parent => {
    let tr = document.createElement('tr');

    parent.appendChild(tr);

    return tr;
}


let generateItem = (parent, src) => {
    let td = document.createElement('td');
    let img = generateImage(src);

    td.appendChild(img);

    parent.appendChild(td);
}

export {generateTable, generateTableRow, generateItem};