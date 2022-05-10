import React from "react";
import Button from "../button/Button";
import cl from "./css/header.module.css";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import List from "./components/List";
import Profile from "./components/Profile";

function Header() {
    return (
        <header>
            <Logo />
            <Nav/>
            <div className={cl.header__div__button}>
                <Button content='Add New Event' clName='orange_button' position='header'/>
            </div>            
            <List/>
            <Profile/>
        </header>
    );
}

export default Header;