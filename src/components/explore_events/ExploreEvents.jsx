import React from "react";
import cl from "./css/ExploreEvents.module.css";

function ExploreEvents (){
    return (
        <div className={cl.container}>
            <div className={cl.container__div}>
                <div>
                    <img src="ExploreEvents/weather_0.svg" alt="" width={35}/>
                    <p>Today</p>
                </div>
                <img src="ExploreEvents/weather_0.svg" alt="" width={40} className={cl.container__div__img}/>
            </div>
            <div className={cl.container__div}>
                <div>
                    <img src="ExploreEvents/weather_1.svg" alt="" width={35}/>
                    <p>Toworrow</p>
                </div>
                <img src="ExploreEvents/weather_1.svg" alt="" width={40} className={cl.container__div__img}/>
            </div>
            <div className={cl.container__div}>
                <div>
                    <img src="ExploreEvents/calendar.svg" alt="" width={35}/>
                    <p>This Week</p>
                </div>
                <img src="ExploreEvents/calendar.svg" alt="" width={40} className={cl.container__div__img}/>
            </div>
            <div className={cl.container__div}>
                <div>
                    <img src="ExploreEvents/calendar_check.svg" alt="" width={35}/>
                    <p>Choose Date</p>
                </div>
                <img src="ExploreEvents/calendar_check.svg" alt="" width={40} className={cl.container__div__img}/>
            </div>
        </div>
    );
}

export default ExploreEvents;