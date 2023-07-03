import React from "react";
import ReStyle from './Registration.module.css'
import ErorPg from "../../ErrorPage/errorPage";
import instaText from "../../../assets/authorization/instaText.png"
import facebookLogo from "../../../assets/authorization/facebook.png"
import { useNavigate, NavLink } from "react-router-dom";
import { updateServer } from "../../redux/state";




const Registration = (props) => {
    let loginLink = React.createRef();
    let passLink = React.createRef();
    const navigate = useNavigate();
    let checkValid = () => {
        let logText = loginLink.current.value;
        let pasText = passLink.current.value;
        if (props.data.authFunc(logText, pasText)){
            navigate("/home")
            updateServer()
        }
    }
    return (
        <div>
            <div className={ReStyle.MainBlock}>
                <div className={ReStyle.LogoArea}>
                    <img className={ReStyle.InLogo} src={instaText} alt="instagram" />
                </div>
                <input className={ReStyle.InputArea} placeholder="Телефон, имя пользователя" ref={loginLink}></input>
                <input className={ReStyle.InputArea} placeholder="Пароль" type="password" ref={passLink}></input>

                <button className={ReStyle.EnterBtn} onClick={checkValid}>Войти</button>
               
                <p> - или - </p>
                <div className={ReStyle.fromFacebook}>
                    <span>
                        <span className={ReStyle.FaIcon}> <img src={facebookLogo} alt="f" />    </span>
                        <NavLink to = "/error">Войти через Facebook</NavLink>
                    </span>
                </div>
                <p>Забыли пароль?</p>
            </div>
            <div className={ReStyle.NoAccountArea}>
                <div className={ReStyle.NoAccountTextArea}>
                    <span>У вас еще нет аккаунта?   </span>
                    <span><NavLink to="/error" className={ReStyle.RegLink} href={<ErorPg />}>Зарегистрироваться</NavLink></span>
                </div>

            </div>
        </div>
    )
}

export default Registration;