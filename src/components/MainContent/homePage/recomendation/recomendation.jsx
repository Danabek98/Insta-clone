import React from "react";
import reStyle from "./recomendation.module.css"
import { Persons } from "../../../redux/persons";

const Recomendation = (props) => {
    let recomendationList = props.data.map(
        p => 
        <div className={reStyle.recArea}>
            <div className={reStyle.imgArea}>
                <img src={Persons[p.id].icon} alt="ava" className={reStyle.ava}/>
            </div>
            <div className={reStyle.txtArea}>
                <p className={reStyle.account}>{Persons[p.id].account}</p>
                <p className={reStyle.recText}>Рекомендации для вас</p>
            </div>
        </div>
    )
    return (
        <div className={reStyle.main}>
            <div className={reStyle.myProfile}>
                <div className={reStyle.myAvaArea}>
                    <img className={reStyle.adminAva} src={Persons[6].icon} alt="ava"></img>
                </div>
                <div className={reStyle.myDataArea}>
                    <p className={reStyle.myName}>{Persons[6].account}</p>
                    <p>I'm admin!!!</p>
                </div>
            </div>
            <p className={reStyle.recForYou}>Рекомендации для вас</p>
            {recomendationList}
        </div>
    )
}

export default Recomendation;