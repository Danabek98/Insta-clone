import React from "react";
import prStyle from "./profilePage.module.css"
import UpperProfilePage from "./upperProfilePage/upperProfilePage";
import BottomProfilePage from "./bottomPP/bottomPP";

const Profile = (props) => {
    return (
        <div>
            <div className={prStyle.main}>
                <UpperProfilePage />
                {/* <ProfileContent /> */}
                <BottomProfilePage data = {props.data}/>
                
            </div>
        </div>
    )
}

export default Profile;