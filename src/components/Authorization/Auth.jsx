import React from "react";
import AuStyle from './Auth.module.css'
import Registration from "./Registration/Registration";
import AuthPhoto from "./../../assets/authorization/iphones.png"

const Authorization = (props) => {
    
    return(
        <div>
            <div className={AuStyle.MainArea}>
                <div className={AuStyle.LeftArea}>
                     <img className={AuStyle.InstPhoto} src={AuthPhoto} alt="phones" />
                </div>
                <div className={AuStyle.RightArea}>
                    <Registration data = {props.data}/>    
                </div>
            </div>
        </div>
    )
}

export default Authorization;