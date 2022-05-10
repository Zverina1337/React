import React from "react";
import './css/button.css'

function Button (props){
    console.log(props.clName);
    if (props.clName == 'orange_button' && props.position == 'header' || props.position == 'main'){
           return (
        <div className='header__div__button'>
            <button className='orange_button'>{props.content}</button>
        </div>  
    ); 
    }else{
           return (
    <div className=''>
        <button className='white_border_button'>{props.content}</button>
    </div>
    ); 
    }
}

export default Button;