import React, { Component } from 'react';
import '../App.css';
// import CalendarDay from './CalendarMonth';



class CalendarDay extends Component {
    render(){
        return(
            <div style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
                <h1 className=""> {this.props.day}</h1>
            </div>
        )
    }
        

}

export default CalendarDay;