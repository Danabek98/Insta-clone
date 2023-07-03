import { historyImages } from "../../assets/Home/History/historyImages"
import { profileImages } from "../../assets/Profile/ProfileImages"
import addIcon from "./../../assets/SlideBar/add.png"

let reloadSite = () =>{

}
export let updateServer = () =>{
    reloadSite(state)
}
let AuthorizationFunc = (login, pass) =>{
    if (login === "admin" && pass === "admin"){
        state.AuthorizationPage.nextPage = false
        return true
    }
    return false
}
export let subscribe = (observer) => {
    reloadSite = observer;
}

let _savedPost = []

let state = {
    AuthorizationPage: {
        authFunc : AuthorizationFunc,
        nextPage : true
    },

    SlideBarPage : {
        nameList :[
            {name : "Главная", icon : addIcon, link : "home"},
            {name : "Поисковой запрос", icon : addIcon, link : "search"},
            {name : "Интересное", icon : addIcon, link : "interesting"},
            {name : "Reels", icon : addIcon, link : "reels"},
            {name : "Сообщения", icon : addIcon, link : "direct"},
            {name : "Уведомления", icon : addIcon, link : "likes"},
            {name : "Создать", icon : addIcon, link : "create"},
            {name : "Профиль", icon : addIcon, link : "profile"}
        ]
    },

    HomePage : {
        history : [
            { id : 0, content : null},
            { id : 1, content : null},
            { id : 2, content : null},
            { id : 3, content : null},
            { id : 4, content : null},
            { id : 5, content : null}

        ],
        post : [
            { id : 0, content : historyImages.contents[0], day : 1, likesCount : 788, liked : false, saved : false, description : "Yahooo", comments : [{cText : "good", id : 1}]},
            { id : 1, content : historyImages.contents[1], day : 2, likesCount : 951, liked : false, saved : false, description : "Пожелайте удачи", comments : [{cText : "хорош", id : 0}]},
            { id : 2, content : historyImages.contents[2], day : 1, likesCount : 654, liked : false, saved : false, description : "Frontend!!!", comments : [{cText : "good luck", id : 3}]},
            { id : 3, content : historyImages.contents[3], day : 3, likesCount : 478, liked : false, saved : false, description : "ONLINE", comments : [{cText : "wooooow", id : 2}]},
            { id : 4, content : historyImages.contents[4], day : 2, likesCount : 589, liked : false, saved : false, description : "Это мой первый проект", comments : [{cText : "Удачи", id : 5}]},
            { id : 5, content : historyImages.contents[5], day : 4, likesCount : 700, liked : false, saved : false, description : "Спасибо за просмотр!", comments : [{cText : "Нет проблем!!!", id : 4}]}
        ], 

        recomendation : [
            { id : 0},
            { id : 1},
            { id : 2},
            { id : 3},
            { id : 4},
            { id : 5}
        ], 
        setLike(value) {
            if(this.post[value].liked){
                this.post[value].likesCount -= 1
                this.post[value].liked = false
                updateServer()
                return
            }
            this.post[value].likesCount += 1
            this.post[value].liked = true
            updateServer()
            return 
        },
        comentArea : "",
        updateComentArea(text){
            this.comentArea = text
            updateServer()
        },
        setComment(id){
            if (this.comentArea === "") {
                return
            }
            let _coment = {
                cText : this.comentArea,
                id : 6
            }
            this.post[id].comments.push(_coment)
            this.comentArea = ""
            updateServer()
        },
        savePost(idx){
            if (this.post[idx].saved){
                this.post[idx].saved = false;
                let _idx = _savedPost.findIndex(p => p.id === idx);
                _savedPost.splice(_idx, 1);
                updateServer();
                return
            }
            this.post[idx].saved = true;
            _savedPost.push(this.post[idx]);
            updateServer();
        }
    },
    ProfilePage : {
        posts : [
            {contentImage : profileImages.post__1},
            {contentImage : profileImages.post__2}
        ],
        savedPosts : _savedPost,
    }
}

export default state

// post : [
//     {account : "custom", icon : historyImages.avatars[0], id : 0, content : historyImages.contents[0], day : 1, likesCount : 788, description : "Yahooo", comments : [{cText : "good", author : "lyric", icon :historyImages.avatars[1]}]},
//     {account : "lyric", icon : historyImages.avatars[1], id : 1, content : historyImages.contents[1], day : 2, likesCount : 951, description : "Пожелайте удачи", comments : [{cText : "good", author : "lyric", icon :historyImages.avatars[1]}]},
//     {account : "oil.atyrau", icon : historyImages.avatars[2], id : 2, content : historyImages.contents[2], day : 1, likesCount : 654, description : "Frontend!!!", comments : [{cText : "good", author : "lyric", icon :historyImages.avatars[1]}]},
//     {account : "nazar", icon : historyImages.avatars[3], id : 3, content : historyImages.contents[3], day : 3, likesCount : 478, description : "ONLINE", comments : [{cText : "good", author : "lyric", icon :historyImages.avatars[1]}]},
//     {account : "eap", icon : historyImages.avatars[4], id : 4, content : historyImages.contents[4], day : 2, likesCount : 589, description : "Это мой первый проект", comments : [{cText : "good", author : "lyric", icon :historyImages.avatars[1]}]},
//     {account : "clone_inst", icon : historyImages.avatars[5], id : 5, content : historyImages.contents[5], day : 4, likesCount : 700, description : "Спасибо за просмотр!", comments : [{cText : "good", author : "lyric", icon :historyImages.avatars[1]}]}
// ]