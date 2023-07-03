import React from "react";
import pStyle from "./publicationsContent.module.css"
import { icons } from "../../../../../assets/icons/icons";

const PublicationC = (props) => {
    let postCreator = props.data.posts.map(
        p => 
        <div className={pStyle.box}>
            <img src={p.contentImage} alt="" className={pStyle.postBox} />
            <div className={pStyle.midleInfo}>
                <span><img src={icons.like} alt="like" className={pStyle.icon} /> 50 </span>
                <span><img src={icons.comment} alt="comment" className={pStyle.icon} /> 0 </span>
            </div>
        </div>
    );
    return (
        <div className={pStyle.main}>
            {postCreator}
        </div>
    )
}

export default PublicationC;