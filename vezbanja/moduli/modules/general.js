let generateImage = src => {
    let img = document.createElement('img');
    img.src = src;
    img.style.width = "160px";
    img.alt = "Picture unavailable"

    return img;
}

export default generateImage;