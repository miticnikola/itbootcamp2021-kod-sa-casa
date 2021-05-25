//Dohvatanje roditeljskog cvora
let linkovi = document.querySelectorAll("a");

linkovi.array.forEach(link => {
    console.log(link.parenNode);
    link.parenNode.style.border = "2px solid red";
});

