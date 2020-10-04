import React, { Component } from 'react';
import '../App.css';
import salles from '../salles';
import { Tableau } from '../components/Table';

class Cellule extends Component {
    render(){
      

        return(
            salles.IIM.map((salle) => {
                return(
                    <div className="card">
                        <h4>{salle.nom}</h4>
                    </div>
                )
            })
            
        )
    }
        

}

export default Cellule;

