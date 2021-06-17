
class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    // Setters
    set room(room){
        this._room = room;
    }
    set username(username){
        this._username = username;
    }
    // Getters
    get room(){
        return this._room;
    }
    get username(){
        return this._username;
    }

    // Methods
    async addChat(msg){
        let d = new Date();
        let chat = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(d)
        }

        let response = await this.chats.add(chat); //add automatski deklarise id, dok set ne deklarise automatski

        return response;
    }

    getChats(callBack){
        this.chats.onSnapshot(snapshot => {
            // console.log(snapshot.docChanges());
            snapshot.docChanges().forEach(change => {
                if(change.type == "added"){
                    // console.log("Promena u bazi");
                    callBack(change.doc.data()); //vrsi ispis dokumenata koji su dodati u bazu
                }
            });
        });
    }
}

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

console.log(chatroom1);


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


// POZIV CALLBACK FUNKCIJE getChats();
chatroom1.getChats(data => {
    console.log(data);
});