import React, { Component } from 'react';
import '../App.css';
import { stockData } from "../data";

class Data extends Component {
    render(){
        return(
            <div>
            <h1>Hello guys</h1>
            {stockData.map((datas, key) => {
                return (
                <div key={key}>
                    {console.log(datas.vcalendar[0].vevent[1].location)}
                <h1>{datas.vcalendar[0].calname}</h1>
                <p>{datas.vcalendar[0].vevent[1].location}</p>
                </div>
                )
            })}

        </div>
        )
    }
        

    
}

export default Data;