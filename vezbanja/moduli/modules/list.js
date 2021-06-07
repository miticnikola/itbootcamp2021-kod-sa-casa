import generateImage from "./general.js";

let generateList = parent => {
    let ul = document.createElement('ul');

    parent.appendChild(ul);
    return ul;
}

let generateListItem = (parent, src) => {
    let li = document.createElement('li');
    let img = generateImage(src);

    li.appendChild(img);

    parent.appendChild(li);

    return li;
}

export {generateList, generateListItem};