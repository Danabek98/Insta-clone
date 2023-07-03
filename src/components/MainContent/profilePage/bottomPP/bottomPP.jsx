import React, { useState } from "react";
import BoStyle from "./bottomPP.module.css";
import PublicationC from "./contensArea/publicationsContent";
import SavedContents from "./contensArea/savedContents";

const BottomProfilePage = (props) => {
    const [toggleState, setToggleState] = useState(1);
    let toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div className={BoStyle.main}>
            <div className={BoStyle.tabs} >
                <div className={toggleState === 1 ? BoStyle.activeTab : BoStyle.nonActiveTab} onClick={() => toggleTab(1)}>
                    <p className={toggleState === 1 ? BoStyle.activeP : BoStyle.nonActiveP}>ПУБЛИКАЦИИ</p>
                </div>
                <div className={toggleState === 2 ? BoStyle.activeTab : BoStyle.nonActiveTab} onClick={() => toggleTab(2)}>
                    <p className={toggleState === 2 ? BoStyle.activeP : BoStyle.nonActiveP}>СОХРАНЕННОЕ</p>
                </div>
            </div>
            <div className={BoStyle.contentArea}>
                {toggleState === 1 ? <PublicationC data = {props.data}/> : <SavedContents data = {props.data}/>}
            </div>

        </div>
    )
}
export default BottomProfilePage;