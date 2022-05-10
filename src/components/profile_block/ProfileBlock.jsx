import React from "react";
import cl from "./css/ProfileBlock.module.css";

function ProfileBlock (){
    return (
        <div className={cl.container}>
            <div className={cl.container__info}>
                <div className={cl.container__info__userinfo}>
                    <img src="ProfileBlock/user.jpg" alt="" className={cl.container__info__user}/>
                    <h1>John Doe</h1>
                </div>
                <div className={cl.container__info__location}>
                    <img src="ProfileBlock/location.svg" alt="" />
                    <p>India</p>
                </div>
                <div className={cl.container__info__follow}>
                    <div>
                        <p>Followers</p>
                        <p>130</p>
                    </div>
                    <div>
                        <p>Following</p>
                        <p>300</p>
                    </div>
                </div>
                <button className={cl.container__info__button}>View Profile</button>
            </div>
        </div>
    );
}

export default ProfileBlock;