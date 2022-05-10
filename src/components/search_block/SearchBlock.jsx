import React from "react";
import cl from "./css/Search.module.css";

function SearchBlock (){
    return (
        <div className={cl.container}>
            <form action="">
                <div><legend>Events happening in your city</legend></div>
                <div className={cl.container__options}>
                    <input type="text"/>
                    <select>
                        <option value="Select city">Select city</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <select>
                        <option value="All Dates">All Dates</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <button type="submit"><img src="SearchBlock/search.svg" alt="" /></button>
                </div>
            </form>
        </div>
    );
}

export default SearchBlock;