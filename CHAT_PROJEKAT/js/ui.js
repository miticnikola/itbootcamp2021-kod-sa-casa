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

        // Hours and Minutes
        let h = date.getHours();
        let min = date.getMinutes();

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

        return `${d}.${m}.${g} - ${h}:${min}`
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