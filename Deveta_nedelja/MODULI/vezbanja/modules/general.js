export let generateImage = src => {
    let img = document.createElement('img');

    img.src = src;
    img.alt = "slika";

    return img;
};