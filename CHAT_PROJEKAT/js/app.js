import Chatroom from './chat.js';
import ChatUI from './ui.js';

let chatroom1 = new Chatroom('js', 'Stefan');

// Provera getera i setera
//geter
console.log(chatroom1.username);
// Seter
chatroom1.username = "Izvorinka Milosevic"
console.log(chatroom1.username);

// seter
console.log(chatroom1.room);
// geter
chatroom1.room = 'general';
console.log(chatroom1.room);

// console.log(chatroom1);


// Ovde se radi slanje promisa


// chatroom1.addChat("Ovo je poruka")
// .then(() => {
//     console.log('Uspesno ste prosledili novu poruku');
// })
// .catch(err => {
//     console.log(`Doslo je do greske ${err}`);
// });

// let chatroom2 = new Chatroom("general", 'Jelena');
// chatroom2.addChat("Zdravo svima")
// .then(() => {
//     console.log("Uspesno ste prosledili poruku");
// })
// .catch(err => {
//     console.log(err);
// });
let chatroom2 = new Chatroom('tests', 'Milica');

chatroom2.updateRoom('general');
// console.log(chatroom2);

chatroom2.updateUsername('Jovica');
console.log(chatroom2);

// POZIV CALLBACK FUNKCIJE getChats();
chatroom2.getChats(data => {
    chatUI1.templateLI(data);
});


// chatroom2.addChat("Nemamo test")
// .then(() => {
//     console.log(`Uspesno prosledjena poruka`);
// })
// .catch(err => {
//     console.log(`ERROR: ${err}`);
// });



//////////////////////////////////////////// Testiranje ChatUI klase
let ulChatList = document.querySelector('ul');
let chatUI1 = new ChatUI(ulChatList);

console.log(chatUI1);


// 
let userSubmit = document.querySelector('#userSubmit');

let msgSubmit = document.querySelector('#msgSubmit');
let msgInput = document.querySelector('#message');
// console.log(userSubmit, msgSubmit);

// userSubmit.addEventListener('submit', () => {
    
// })

msgSubmit.addEventListener('click', e => {
    e.preventDefault();
    chatroom2.addChat(msgInput.value);
    // .then(() => {
    //     msgInput.value = '';
    // })
    // .catch(err => {
    //     console.log(err);
    // });
});