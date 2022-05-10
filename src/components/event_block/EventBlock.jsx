import React from "react";
import cl from "./css/EventBlock.module.css"
import Button from "../button/Button";

function EventBlock (){
    return (
        <div className={cl.container}>
            <div className={cl.container__postinfo}>
                <h1>Want to post your event?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam repudiandae soluta aperiam libero temporibus enim quisquam sit nam quis minus ipsum, assumenda obcaecati sunt tenetur!</p>
                <Button content="Post it now" position="main"/>
            </div>
        </div>
    );
}

export default EventBlock;