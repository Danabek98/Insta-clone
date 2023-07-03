import React from "react";
import HoStyle from "./homePage.module.css"
import HistoryF from "./hitory/history";
import PostCreate from "./post/Post";
import Recomendation from "./recomendation/recomendation";

const HomePage = (props) => {
    
    return (
        <div className={HoStyle.main}>
            <div className={HoStyle.leftArea}>
                <HistoryF data={props.data}/>
                <div className={HoStyle.PostArea}>
                    <PostCreate data = {props.data}/>
                </div>
            </div>
            <div className={HoStyle.rightArea}>
                <Recomendation data = {props.data.recomendation}/>
            </div>
        </div>
    )
}

export default HomePage;