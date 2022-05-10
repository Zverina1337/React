import React from "react";
import cl from "./css/Post.module.css";
import Button from "../../../button/Button";

function Post (props){
    return (
        <div className={cl.container}>
            <div className={cl.container__header}>
                <h2>{props.title}</h2>
                <h2>Ticket price:<span className={cl.container__header__money}>{props.money}</span></h2>
                <button>...</button>
            </div>
            <div className={cl.container__main}>
                <div>
                    <Button content="Buy Ticket" clName="orange_button" position="main"/>
                    <Button content="Maybe"/>
                </div>
                <div>
                    <Button content="450 Seats"/>
                    <Button content="Can`t Go"/>  
                </div>
            </div>
            <div className={cl.container__info__first}>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>City</p>
                    <p>{props.city}</p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Date</p>
                    <p>{props.date}</p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Time</p>
                    <p>{props.time}</p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Weather</p>
                    <p>{props.weather}</p>
                </div>
            </div>
            <div className={cl.container__info__second}>
                <div className={cl.container__info__going}>
                    <img src="" alt="" />
                    <p>Going</p>
                    <p>{props.going}</p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Maybe</p>
                    <p>{props.maybe}</p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Can`t Go</p>
                    <p>{props.cantgo}</p>
                </div>
            </div>
            <div className={cl.container__info__third}>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Like<span>{props.like}</span></p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Comment<span>{props.comment}</span></p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="" alt="" />
                    <p>Share<span>{props.share}</span></p>
                </div>
            </div>
            
        </div>
    );
}

export default Post;