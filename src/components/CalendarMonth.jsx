import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarDay from './CalendarDay.jsx'; 


class CalendarMonth extends Component {
    render(){
        return(
            <div className="Card" style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
                <div className="card-body" >
    
  
                <h1> {this.props.title} </h1>
                <div className="row">
                    <CalendarDay/>
                </div>

            </div>
            </div>
        )
    }
        

}

export default CalendarMonth;