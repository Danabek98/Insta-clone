import React from "react";
import upStyle from "./upperProfilePage.module.css"
import { Persons } from "../../../redux/persons";
import { icons } from "../../../../assets/icons/icons";

const UpperProfilePage = () => {
    return (
        <div className={upStyle.main}>
            <div className={upStyle.ava}>
                <img src={Persons[6].icon} alt="ava" className={upStyle.ava}/>
            </div>
            <div className={upStyle.rightBlock}>
                <div className={upStyle.infoBlock}>
                    <p className={upStyle.account}>Admin</p>
                    <button className={upStyle.editBtn}>Редактировать профиль</button>
                    <button className={upStyle.editBtn}>Показать архив</button>
                    {/* <button className={upStyle.optionBtn}></button> */}
                    <img src={icons.setting} alt="setting" className={upStyle.optionBtn} />

                </div>
                <div className={upStyle.infoBlock}>
                    <p className={upStyle.countPublish}>2 публикаций</p>
                    <p className={upStyle.subscribers}>100 подписчиков</p>
                    <p className={upStyle.subscriptions}>100 подписок</p>
                </div>
                <div className={upStyle.infoBlock}>
                    <p className={upStyle.aboutMe}>it's my page</p>
                </div>
            </div>

        </div>
    )
}

export default UpperProfilePage;