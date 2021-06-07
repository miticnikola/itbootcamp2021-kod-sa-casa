let generateImage = src => {
    let img = document.createElement('img');

    img.src = src;
    img.alt = "The image could not be loaded";
    img.style.width = "160px";

    return img;
};

export default generateImage;