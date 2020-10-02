import React, { Component } from 'react';
import '../App.css';
import '../css/calendrier.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarDay from './CalendarDay.jsx'; 


class CalendarMonth extends Component {
    render(){
        return(
            <div className="Card" style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
                <div className="card-body" >
    
  
                <h1> {this.props.title} </h1>
                <div className="row">
                    
                    <tr className="calendarDays">
                        <td><CalendarDay day="Lundi"/></td>
                        <td><CalendarDay day="Mardi"/></td>
                        <td><CalendarDay day="Mercredi"/></td>
                        <td><CalendarDay day="Jeudi"/></td>
                        <td><CalendarDay day="Vendredi"/></td>
                        <td><CalendarDay day="Samedi"/></td>
                        <td><CalendarDay day="Dimanche"/></td>
                    </tr>
                </div>

            </div>
            </div>
        )
    }
        

}

export default CalendarMonth;