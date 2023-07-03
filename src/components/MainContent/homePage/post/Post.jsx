import React from "react";
import poStyle from "./post.module.css"
import BtnArea from "./btnArea/btnArea";
import PostBottom from "./postBottom/postBottom";
import { Persons } from "../../../redux/persons";

const PostCreate = (props) => {
    let postList = props.data.post.map(p => 
        <div className={poStyle.postArea}>
            <div className={poStyle.header}>
                <img src={Persons[p.id].icon} alt="ava" className={poStyle.headAva} />
                <p className={poStyle.headAccaount}>{Persons[p.id].account}</p>
                <p className={poStyle.headDate}>• {p.day} дн.</p>
            </div>
            <div className={poStyle.content}>
                <img className={poStyle.contentImage} src={p.content} alt="" />
            </div>
            <div className={poStyle.BtnArea}>
                <BtnArea data = {props.data} id = {p.id}/>
            </div>
            <div className={poStyle.bottom}>
                {/* <PostBottom likes = {p.likesCount} acc = {Persons[p.id].account} description = {p.description} comments = {p.comments}/> */}
                <PostBottom data = {props.data} id = {p.id}/>
                
            </div>
        </div>
        );
    return (
        postList
    )
}

export default PostCreate;