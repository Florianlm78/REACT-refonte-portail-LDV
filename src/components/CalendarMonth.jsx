import React, { Component } from 'react';
import '../App.css';
import '../css/calendrier.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarDay from './CalendarDay.jsx';
import { stockData } from "../data";
import '../css/cal-month.css';
//import 'bootstrap/dist/css/bootstrap.min.css';




class CalendarMonth extends Component {

    state = { 
        stockData
    };

    //     render(){
    //     console.log(stockData);
        
        
    //     return(
    //        <div className=""></div>
    //     )
    // }
        
//     render(){
//         return(
//             <div>
//             {stockData.map((datas, key) => {
//                 datas.vcalendar.map((datas2, key) => {
                    
//                     datas2.vevent.map((datas3, key) => {
//                         console.log(datas3);
//                     return (
                        
//                         <div className="">
//                     <div key={key} className="Card" style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
//                         <div className="card-body" >
//                             <div className="row">
                                
//                                 <tr className="calendarDays">                                                            
//                                     <td>{datas.vcalendar[0].vevent[2].prof}</td>
//                                     <td>{datas.vcalendar[0].vevent[2].prof}</td>
                                    
//                                 </tr>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     )
//             } )}  )})}

//         </div>
//         )
//     }

// }



// NE MACHE PAS
    // render(){
    //     const Events =  Object
    //     .keys(this.state.stockData)
    //     .map(key => <CalendarDay  key = {key} method = {this.state.stockData.method[key]}/>);
        
        
    //     return(
    //         <div className="Card" style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
    //             <div className="card-body" >
    
  
    //             <h1> {this.props.title} </h1>
    //             <div className="row">
                    
    //                 <tr className="calendarDays">
    //                 <td>{ Events }</td>
                        
    //                 </tr>
    //             </div>

    //         </div>
    //         </div>
    //     )
    // }

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
                            <td><CalendarDay prof="Alexis Bougy" salle="E230" day="Lundi"/></td>
                            <td><CalendarDay prof="Virak Mey" salle="E430" day="Mardi"/></td>
                            <td><CalendarDay prof="Alexis Bougy" salle="E230" day="Mercredi"/></td>
                            <td><CalendarDay prof="Alexis Bougy" salle="E230" day="Jeudi"/></td>
                            <td><CalendarDay prof="Alexis Bougy" salle="E230" day="Vendredi"/></td>
                            <td><CalendarDay prof="Alexis Bougy" salle="E230" day="Samedi"/></td>
                            <td><CalendarDay prof="Alexis Bougy" salle="E230" day="Dimanche"/></td>
                        </tr>
                </div>
            </div>
        )
    }
        

// }

    // render(){
    //     return(
    //         <div>
    //         {stockData.map((datas, key) => {
    //             datas.vcalendar.map((datas2, key) => {
                    
    //                 datas2.vevent.map((datas3, key) => {
    //                     // console.log(datas3);
    //                     console.log(datas3.prof);
    //                     return (
    //                             <div className="Card" style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
    //                                 <div className="card-body" >
                                    
            
    //                                     <h1> {this.props.title} </h1>
    //                                     <div className="row">
                                            
    //                                         <tr className="calendarDays">
    //                                             <td><CalendarDay  key={`datas3${key}`}
    //                                             {...datas3}/></td>
    //                                         </tr>
    //                                     </div>

    //                                 </div>
    //                             </div>
                       
    //                             )
    //                  } )}  )})}

    //     </div>
    //     )
    // }

}


export default CalendarMonth;