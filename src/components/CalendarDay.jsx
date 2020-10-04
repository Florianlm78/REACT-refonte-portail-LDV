import React, { Component } from 'react';
import '../App.css';
// import CalendarDay from './CalendarMonth';




const CalendarDay = ( {prof, salle, day}) => (
    
       
            <div style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
                <h1 className=""> {day}</h1>
                <h2> Intervenant : </h2>
                <h2> {prof} </h2>
                <h2> Salle : </h2>
                <h2> {salle} </h2>
            </div>         
        
    
        

);


export default CalendarDay;