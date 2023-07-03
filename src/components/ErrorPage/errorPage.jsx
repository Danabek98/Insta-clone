import React from "react";
import ErStyle from './errorPage.module.css'
import { useNavigate } from "react-router-dom";
const ErorPg = () =>{
    const navigate = useNavigate();
    return (
        <div className={ErStyle.Main}>
            <h1>Error</h1>
            <h1>Данная страница пока не готова</h1>
            <h1>: (</h1>
            
            <button className={ErStyle.Btn} onClick={() =>navigate(-1)}>Назад</button>

        </div>
    )
}

export default ErorPg;