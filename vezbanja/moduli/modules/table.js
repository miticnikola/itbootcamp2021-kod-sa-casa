import generateImage from "../modules/general.js";

let generateTable = parent => {
    let table = document.createElement('table');
    table.setAttribute("style", 'border-collapse: collapse');

    
    parent.appendChild(table);

    return table;
}

let generateTableRow = parent => {
    let tr = document.createElement('tr');

    parent.appendChild(tr);

    return tr;
}

let generateTableItem = (parent, src) => {
    let td = document.createElement('td');
    td.setAttribute("style", 'border: 1px solid black');

    let img = generateImage(src);

    td.appendChild(img);

    parent.appendChild(td);

    return td;
}

export {generateTable, generateTableRow, generateTableItem};
