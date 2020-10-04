import React, { Component } from 'react';
import '../App.css';
import '../css/calendrier.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarDay from './CalendarDay.jsx';
import { stockData } from "../data";


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
            <div className="Card" style={{width: + '18px' , height: + '100vh', border: 'solid'}}>
                <div className="card-body" >
    
  
                <h1> {this.props.title} </h1>
                <div className="row">
                    
                    <tr className="calendarDays">
                        <td><CalendarDay prof={this.props.prof} day="Lundi"/></td>
                        <td><CalendarDay prof={this.props.prof} day="Mardi"/></td>
                        <td><CalendarDay prof={this.props.prof} day="Mercredi"/></td>
                        <td><CalendarDay prof={this.props.prof} day="Jeudi"/></td>
                        <td><CalendarDay prof={this.props.prof} day="Vendredi"/></td>
                        <td><CalendarDay prof={this.props.prof} day="Samedi"/></td>
                        <td><CalendarDay prof={this.props.prof} day="Dimanche"/></td>
                    </tr>
                </div>

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