export default class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
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
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at', 'asc') //moze i bez asc
        .onSnapshot(snapshot => {
            // console.log(snapshot.docChanges());
            snapshot.docChanges().forEach(change => {
                if(change.type == "added"){
                    // console.log("Promena u bazi");
                    // console.log(callBack(change.doc.data());
                    callBack(change.doc.data()); //vrsi ispis dokumenata koji su dodati u bazu
                }
            });
        });
    }

    updateUsername(newUserName){
        this.username = newUserName;
        // Postavljanje vrednosti u localStorage
        localStorage.setItem("username", newUserName); //ili this.username jer u prethodnoj liniji this.username dobija vrednost newUserName
    }

    updateRoom(newRoom){
        this.room = newRoom;
        // localStorage.setItem("room", newRoom);

        if(this.unsub){
            this.unsub();

            // Postavljanje vrednosti za sobu u localStorage
        }

    }

}
