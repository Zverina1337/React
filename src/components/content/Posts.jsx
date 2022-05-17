import React from "react";
import cl from './css/Posts.module.css';
import Post from './components/post/Post';

function Posts (){
    const objects = [
        {
            title : "Moscow So Cool!", money : "15$", city : "London", 
            date : "8 Dec 2022", time : "17:00 - 19:00", weather : "Clear", 
            going : "75", maybe : "130", cantgo : "20", like : "256", 
            comment : "380", share : "30", bg : "bg_city.jfif"
        }
                   ]
    return (
        <div className={cl.container}>
            <div className={cl.container__buttons}>
                <button onClick="">Upcoming</button>
                <button>Treading</button>
                <button>This Week</button>
            </div>
            <div className={cl.container__posts}>
                <Post title="Event Title Here" money="15$" city="London" 
                date="8 Dec 2022" time="17:00 — 19:00" weather="Clear" going="75" 
                maybe="130" cantgo="20" like="256" comment="380" share="30" bg="bg_city.jfif"/>
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts;