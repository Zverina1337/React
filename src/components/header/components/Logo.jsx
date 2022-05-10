import React from "react";
import cl from "./../css/header.module.css"

function Logo(){
    return (    
    <div className={cl.header__logo}>
        <img src="header/logo/logo.svg" alt="logo" />
        <h1>Gulp</h1>
    </div>
    );
}
export default Logo;