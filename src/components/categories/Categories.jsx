import React from "react";
import cl from "./css/Categories.module.css";

function Categories (){
    const words = ['Music','Festival','Art','Club','Comedy','Sports','Theatre','Promotions','Others'];
    const images_src =    ["Categories/img/music.svg","Categories/img/flag.svg","Categories/img/art.svg",
                        "Categories/img/club.svg","Categories/img/comedy.svg","Categories/img/sports.svg",
                        "Categories/img/camera.svg","Categories/img/promotion.svg","Categories/img/other.svg"];

        return (
        <div className={cl.container}>
            <h1 className={cl.h1}>Categories</h1>
            {images_src.map((img,index) => <button className={cl.container__div}><p className={cl.p} key={words[index]}>{words[index]}</p><img className={cl.img} key={img} src={img} alt={img}/></button>)}  
        </div>
    );
    
}

export default Categories;