import React from "react";
import SlStyle from './slideBar.module.css'
import Inlogo from './../../../assets/authorization/instaText.png'
import { NavLink } from "react-router-dom";

const SlideBar = (props) => {

    let linkList = props.data.nameList.map(p => 
        <li className={SlStyle.list}>
            <img src={p.icon} className={SlStyle.listIcon} alt="" />
            <span className={SlStyle.listText}>
                <NavLink to={p.link} className={navData => navData.isActive ? SlStyle.active_link: ""}>
                    {p.name}
                </NavLink>
            </span>
        </li> );

    return (
        <div className={SlStyle.Content} >
            <div >
                <div>
                    <img className={SlStyle.logoInstagram} src={Inlogo} alt="instagram" />
                </div>

                <div>
                    <ul  className={SlStyle.pageList}>
                        {linkList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SlideBar;