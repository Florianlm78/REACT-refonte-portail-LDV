import React, { Component } from 'react';
import '../css/cal-day.css';
import '../App.css';


const CalendarDay = ( {prof, salle, day}) => (
    
       
            <div className="day">
                <h1 className=""> {day}</h1>
                <h2> Intervenant : </h2>
                <h2> {prof} </h2>
                <h2> Salle : </h2>
                <h2> {salle} </h2>
            </div>         
        
    
        

);


export default CalendarDay;