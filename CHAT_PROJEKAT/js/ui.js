// import Chatroom from "./chat";

export default class ChatUI{
    constructor(ul){
        this.ul = ul;
    }

    set ul(ul){
        this._ul = ul;
    }
    get ul(){
        return this._ul;
    }
    formatDate(date){
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let g = date.getFullYear();
        // treba dodati i vreme slanja poruke, i plus dodati da svaki broj bude dvocifren, tj da kad je jednocifren broj, da pise npr 09, a ne 9

        return `${d}.${m}.${g}`;
    }
    templateLI(data){
        let date = data.created_at.toDate();

        let li = `
        <li style="border: 1px solid black">
        <span class="name">${data.username} : </span> <span class="msg">${data.message}</span> <br>
        <span class="date">${this.formatDate(date)}</span>
        </li>
        `;

        // li.setAttribute('style', 'border: 1px solid black');
        this.ul.innerHTML += li;
    }
}