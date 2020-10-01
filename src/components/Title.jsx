import React, { Component } from 'react';
import '../App.css';
import { stockData } from "../data";

class Title extends Component {
    render(){
        return(
            <div>
            {stockData.map((datas, key) => {
                return (
                <div key={key}>
                    {console.log(datas.vcalendar[0].calname)}
                <h1>{datas.vcalendar[0].calname}</h1>
                </div>
                )
            })}

        </div>
        )
    }
        

    
}

export default Title;