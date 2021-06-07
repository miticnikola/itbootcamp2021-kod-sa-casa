import generateImage from "./general.js";

 let generateList = parent => {
    let ul = document.createElement('ul');
    parent.appendChild(ul);
    ul.style.overflow = "hidden";
    ul.style.listStyleType = "none";

    return ul;
}

let generateItem = (parent, src) => {
    let li = document.createElement('li');
    let img = generateImage(src);
    li.style.float = "left";

    li.appendChild(img);
    parent.appendChild(li);

    return li;
}

export {generateList, generateItem};