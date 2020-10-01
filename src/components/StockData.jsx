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
                    {console.log(datas.vcalendar[0].vtimezone[0].standard[0].rrule)}
                <h1>Hello {datas.vcalendar[0].vtimezone[0].standard[0].rrule}</h1>
                </div>
                )
            })}

        </div>
        )
    }
        

    
}

export default Data;