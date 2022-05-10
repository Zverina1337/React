import React from "react";
import cl from "./../css/header.module.css"

function Profile(){
    return (    
    <div className={cl.header__profile}>
        <div>
            <div className={cl.header__profile__img}>
                <img src="header/user/user.svg" alt="user" />
            </div>
            <div className={cl.header__profile__content}>
                <p>Hi! John</p>
            </div>
            <button></button>
        </div>
    </div>
    );
}
export default Profile;
