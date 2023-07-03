import React from "react";
import pstyle from "./postBottom.module.css"
import { Persons } from "../../../../redux/persons";
import { icons } from "../../../../../assets/icons/icons";

const PostBottom = (props) => {
    let postData = props.data.post[props.id]
    let newCommentText = React.createRef();
    let updateComent = () => {
        props.data.updateComentArea(newCommentText.current.value)
    }
    

    let commentList = postData.comments.map(
        p => 
        <div className={pstyle.CommentArea}>
            <div className={pstyle.CommentImageArea}>
                <img src={Persons[p.id].icon} alt="ava" />
            </div>
            <div className={pstyle.textArea}>
                <p className={pstyle.AccountCommentator}>{Persons[p.id].account}</p>
                <p className={pstyle.Comments}>{p.cText}</p>
            </div>
        </div>
    )
    return (
        <div className={pstyle.main}>
            <div className={pstyle.likesArea}>
                <p className={pstyle.likeCount}>{postData.likesCount} отметок "Нравится"</p>
            </div>
            <div className={pstyle.descriptionArea}>
                <p className={pstyle.accountName}>{Persons[props.id].account}</p>
                <p className={pstyle.postText}>{postData.description}</p>
            </div>
            {/* <p className={pstyle.moreComments}>посмотреть все коментарии</p> */}
            
            {commentList}
            
            <form  className={pstyle.poForm}>
                <input type="text" className={pstyle.newComment} placeholder="Добавьте коментарий..." 
                    ref={newCommentText} 
                    value={props.data.comentArea}
                    onChange={updateComent}>
                </input>
                <img src={icons.share} alt="share" className={pstyle.newCommentBtn} onClick={() => props.data.setComment(props.id)} />
            </form>            
            
        </div>
    )
}

export default PostBottom;