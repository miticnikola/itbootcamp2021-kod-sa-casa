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
        // Date Today 
        let today = new Date();
        let td = today.getDate();
        let tm = today.getMonth() + 1;
        let ty = today.getFullYear();

        // Date from firebase
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let g = date.getFullYear();

        // Hours and Minutes
        let h = date.getHours();
        let min = date.getMinutes();

        // padStart() -- za dvocifrene formate

        if(d < 10){
            d = `0` + d;
        }
        if(m < 10){
            m = `0` + m;
        }
        if(h < 10){
            h = `0` + h;
        }
        if(min < 10){
            min = `0` + min;
        }

        if(td == d && tm == m && ty == g){
            return `${h}:${min}`;
        } else {
            return `${d}.${m}.${g} - ${h}:${min}`
        }

    }
    templateLI(data){
        let date = data.created_at.toDate();

        let listItem = `
    
        <span class="name">${data.username} : </span> <span class="msg">${data.message}</span> <br>
        <span class="date">${this.formatDate(date)}</span>

        `;

        let li = document.createElement('li');
        li.innerHTML = listItem;

        this.ul.appendChild(li);
        this.ul.scrollTop = this.ul.scrollHeight; //da prikazuje poslednje poruke

        if(localStorage.username == data.username){
            li.setAttribute('style', "float: right; background-color:rgba(107, 185, 240, 0.5); border-radius: 15px 0px 15px 15px;");
        } else {
            li.setAttribute('style', "float: left; background-color: rgba(211, 211, 211, 0.7); border-radius: 0px 15px 15px 15px;");
        }
    }
    clear(){
        this.ul.innerHTML = " ";
    }
}