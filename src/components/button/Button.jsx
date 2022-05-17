import React from "react";
import './css/button.css'

function Button (props){
    if (props.clName == 'orange_button' && props.position == 'header' || props.position == 'main'){
           return (
        <button className='orange_button'>{props.content}</button>
    ); 
    }else{
           return (
        <button className='white_border_button'>{props.content}</button>
    ); 
    }
}

export default Button;