import React from 'react';
import '../css/calendrier.css';
import '../components/CalendarMonth.jsx';
import CalendarMonth from '../components/CalendarMonth.jsx';
import { stockData } from "../data";

const Calendrier = () => (



        <div>
            {/* {stockData.map((datas) => {
                datas.vcalendar.map((vcalendar) => {
                    
                    vcalendar.vevent.map((vevent) => {  
                        return(
                        console.log(vevent.prof),
                        <div className="container-fluid">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil inventore quis, qui similique corporis eaque quas ullam necessitatibus. Recusandae accusantium ad voluptates necessitatibus aut asperiores facere dolorum sapiente autem.</p>
                        
                        </div>
                    
                                
                    
                ); })})})} */}
                <CalendarMonth title="Mai"/>  
        </div>
                )
//  <div className="container-fluid">
//   <CalendarMonth title="Mai"/>  
// </div>
// )

export default Calendrier