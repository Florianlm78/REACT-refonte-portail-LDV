import React, { Component } from 'react';
import '../App.css';
import '../salles';

class Cellule extends Component {
    render(){
       

        return(

            <div className="card">
        
        <h2>{console.log(this.props.details.nom)}</h2> 
        <p>{console.log(this.props.details.disponibility)}</p>               
            </div>
        )
    }
        

}

export default Cellule;


