import Chatroom from './chat.js';
import ChatUI from './ui.js';

// DOM
let ulChatList = document.querySelector('#messages');
let msgSubmit = document.querySelector('#msgSubmit');
let msgInput = document.querySelector('#message');
let userForm = document.getElementById('user');
let userInput = document.getElementById('userName');
let userBtnSubmit = document.querySelector('#userSubmit');
let navRooms = document.querySelector('#tasks');
let btnsRooms = document.querySelectorAll('.btn')


// Citamo iz lokalne memorije username ukoliko postoji, u suprotnom default username je anonymus
let username = () => {
    if(localStorage.username){
        return localStorage.username;
    } else {
        return "anonymus";
    }
}

// Citamo iz lokalne memorije room ukoliko postoji, u suprotnom default room je general
let room = () => {
    if(localStorage.room){
        return localStorage.room;
    } else {
        return "general";
    }
}


// Active buttons
for(let i = 0; i < btnsRooms.length; i++){
    if(btnsRooms[i].id == room()){
        btnsRooms[i].classList.add('active');
    }
}

//Kreiramo objekat klase chatroom
let chatroom2 = new Chatroom(room(), username());

// Kreiranje objekta klase ChatUI
let chatUI1 = new ChatUI(ulChatList);

// Kada se ucitava stranica prvi put, ispisemo cetove na njoj za sobu koju smo naveli
chatroom2.getChats(data => {
    chatUI1.templateLI(data);
});


// Message sending    
    msgSubmit.addEventListener('click', e => {
        e.preventDefault();  

        msgInput.value = msgInput.value.replace('\t', ' ');

        let odseceniRazmaci = msgInput.value.trim();
        
        if(odseceniRazmaci.length == 0){
            alert('Unesite tekst poruke.');
            msgInput.value = '';
        } else {
            chatroom2.addChat(msgInput.value)
            .then(() => {
                msgInput.value = '';
            })
            .catch(err => {
                console.log(err);
            });
        }
        
    });
    
// Update username
userForm.addEventListener('submit', e => {
    e.preventDefault();

    let username = userInput.value;
    username = username.replace('\t', ' ');
    let empty = username.trim();

    if(username.length < 2 || username.length > 10 || empty.length == 0){
        alert('Username must have between 2 and 10 caracters, and can\'t be empty field');
        userForm.reset();
    } else {
        let p = document.createElement('p');
        p.classList.add('notification');
        p.innerHTML = `<span class="userNot">Username:</span> ${userInput.value}`;
        
        userForm.appendChild(p);
        setTimeout(() => {
            userForm.removeChild(p);
        }, 3000);
        
        chatroom2.updateUsername(userInput.value);
        userForm.reset();   
    }
});

// // Changing rooms
// let general = document.getElementById('general');
// let js = document.getElementById('js');
// let homeworks = document.getElementById('homeworks');
// let tests = document.getElementById('tests');

// general.addEventListener('click', () => {
//     ulChatList.innerHTML = ' ';

//     chatroom2.updateRoom('general');
//     chatroom2.getChats(data => {
//         chatUI1.templateLI(data);
//     });
// });

// js.addEventListener('click', () => {
//     ulChatList.innerHTML = ' ';

//     chatroom2.updateRoom('js');
//     chatroom2.getChats(data => {
//         chatUI1.templateLI(data);
//     });

// });
// homeworks.addEventListener('click', () => {
//     ulChatList.innerHTML = ' ';

//     chatroom2.updateRoom('homeworks');
//     chatroom2.getChats(data => {
//         chatUI1.templateLI(data);
//     });

// });
// tests.addEventListener('click', () => {
//     ulChatList.innerHTML = ' ';

//     chatroom2.updateRoom('tests');
//     chatroom2.getChats(data => {
//         chatUI1.templateLI(data);
//     });

// });

navRooms.addEventListener('click', e => {
    if(e.target.tagName == "BUTTON"){
        // 1.izbrisati sve poruke sa ekrana
        chatUI1.clear();
        // 2.pozvati promenu sobe
        console.log(e.target.id);
        chatroom2.updateRoom(e.target.id);
        // 3.prikazati chatove
        chatroom2.getChats(data => {
        chatUI1.templateLI(data);

        for(let i = 0; i < btnsRooms.length; i++){
            btnsRooms[i].classList.remove('active');
        }
        e.target.classList.add('active');
        
    });
    // 4. Postaviti u local storage da smo presli u neku drugu sobu
    localStorage.setItem('room', e.target.id); //a moze i u metodi updateRoom();
    }
});


