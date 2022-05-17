import React from "react";
import cl from "./css/Post.module.css";
import Button from "../../../button/Button";

function Post (props){
    return (
        <div className={cl.container}>
            <div className={cl.container__header}>
                <h2>{props.title}</h2>
                <div>
                    <h2>Ticket price:<span className={cl.container__header__money}>{props.money}</span></h2>
                    <button>...</button>
                </div>
                
            </div>
            <div className={cl.container__main} style={{backgroundImage: `url("/content/post/${props.bg}")`,
                                                        backgroundRepeat: `no-repeat`,backgroundPosition: `center`,
                                                        backgroundSize: `cover`}}>
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
                    <div>
                        <div>
                            <img src="content/post/items/city.svg" alt="" />
                            <h4>City</h4>
                        </div>
                        <p >{props.city}</p>
                    </div>
                </div>
                <div className={cl.container__info__item}>
                    <div>
                        <div>
                            <img src="content/post/items/date.svg" alt="" />
                            <h4>Date</h4> 
                        </div>
                        <p>{props.date}</p> 
                    </div>   
                </div>
                <div className={cl.container__info__item}>
                    <div>
                        <div>
                            <img src="content/post/items/time.svg" alt="" />
                            <h4>Time</h4>
                        </div>
                        <p>{props.time}</p> 
                    </div>
                    
                </div>
                <div className={cl.container__info__item}>
                    <div>
                        <div>
                            <img src="content/post/items/weather.svg" alt="" />
                            <h4>Weather</h4> 
                        </div>
                        <p>{props.weather}</p> 
                    </div>     
                </div>
            </div>
            <div className={cl.container__info__first}>
                <div className={cl.container__info__item}>
                    <div>
                        <div>
                            <img src="content/post/items/going.svg" alt="" />
                            <h4>Going</h4>  
                        </div>
                        <p>{props.going}</p>  
                    </div>
                </div>
                <div className={cl.container__info__item}>
                    <div>
                        <div>
                            <img src="content/post/items/maybe.svg" alt="" />
                            <h4>Maybe</h4> 
                        </div>
                        <p>{props.maybe}</p> 
                    </div>    
                </div>
                <div className={cl.container__info__item}>
                    <div>
                        <div>
                          <img src="content/post/items/cantgo.svg" alt="" />
                            <h4>Can`t Go</h4>  
                        </div>
                        <p>{props.cantgo}</p> 
                    </div>
                    
                </div>
            </div>
            <div className={cl.container__info__second}>
                <div className={cl.container__info__item}>
                    <img src="content/post/items/like.svg" alt="" />
                    <p>Like<span>{props.like}</span></p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="content/post/items/comment.svg" alt="" />
                    <p>Comment<span>{props.comment}</span></p>
                </div>
                <div className={cl.container__info__item}>
                    <img src="content/post/items/share.svg" alt="" />
                    <p>Share<span>{props.share}</span></p>
                </div>
            </div>
            
        </div>
    );
}

export default Post;