import React from "react";
import hiStyle from "./history.module.css"
import { Persons } from "../../../redux/persons";



const HistoryF = (props) =>{
    
    let historyList = props.data.history.map(elem =>
        <div className={hiStyle.historyArea}>
            <div className={hiStyle.AvaBorder}>
                <img src={Persons[elem.id].icon} alt="ava" className={hiStyle.historyAva}/>
            </div>
            <p>{Persons[elem.id].account}</p>
        </div> );
    return(
        <div className={hiStyle.historiesArea}>
            {historyList}
        </div>
    )
}

export default HistoryF;