import React from "react";
import btStyle from "./btnArea.module.css"
import { icons } from "../../../../../assets/icons/icons";


const BtnArea = (props) => {
    let _likeImg = icons.like
    if(props.data.post[props.id].liked){
        _likeImg = icons.liked
    }
    let _saved = icons.save
    if(props.data.post[props.id].saved){
        _saved = icons.saved
    }
    return (
        <div className={btStyle.main}>
            <img src={_likeImg} alt="" className={btStyle.likeBtn + " " + btStyle.btnIcon} onClick={() => props.data.setLike(props.id)} />
            <img src={icons.comment} alt="" className={btStyle.comentBtn + " " + btStyle.btnIcon} />
            <img src={icons.share} alt="" className={btStyle.sendBtn + " " + btStyle.btnIcon} />
            <img src={_saved} alt="" className={btStyle.saveBtn + " " + btStyle.btnIcon} onClick={() => props.data.savePost(props.id)}/>
        </div>
    )
}

export default BtnArea;