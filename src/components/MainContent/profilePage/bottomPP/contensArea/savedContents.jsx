import React from "react";
import SStyle from "./savedContents.module.css";
import { icons } from "../../../../../assets/icons/icons";

const SavedContents = (props) => {
    let postCreator = props.data.savedPosts.map(
        p => 
        <div className={SStyle.box}>
            <img src={p.content} alt="" className={SStyle.postBox} />
            <div className={SStyle.midleInfo}>
                <span><img src={icons.like} alt="like" className={SStyle.icon} /> {p.likesCount} </span>
                <span><img src={icons.comment} alt="comment" className={SStyle.icon} /> {p.likesCount} </span>
            </div>
        </div>
    );
    return (
        <div className={SStyle.main}>
            {postCreator}
        </div>
    )
}

export default SavedContents;