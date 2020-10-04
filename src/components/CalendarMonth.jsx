import React, { Component } from 'react';
import '../App.css';
import '../css/cal-month.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarDay from './CalendarDay.jsx';



class CalendarMonth extends Component {
    render(){
        return(
            <div class="Card">
                <div class="c-hour">

                    <div class="hours-h">
                        <p>_ _H_ _</p>
                        <div class="hours">
                            <p>8H00</p>
                            <p>9H00</p>
                            <p>10H00</p>
                            <p>11H00</p>
                            <p>12H00</p>
                            <p>13H00</p>
                            <p>14H00</p>
                            <p>15H00</p>
                            <p>16H00</p>
                            <p>17H00</p>
                            <p>18H00</p>
                            <p>19H00</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1> {this.props.title} </h1>
                        <tr class="calendarDays">
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
        )
    }
        

}

export default CalendarMonth;