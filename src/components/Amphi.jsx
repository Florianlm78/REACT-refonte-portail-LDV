import React, { Component } from 'react';
import '../App.css';
import salles from '../salles';
import { Tableau } from './Table';

class Cellule extends Component {
    render(){
      

        return(
            <div>
                {
                    salles.LUNDI.map((salle) => {
                        return(
                            <div>
                                <h4>{salle.Amphi}</h4>
                            </div>
                        )
                    })
                }
            </div>
            
        )
    }
        

}

export default Cellule;

/*
console.log(salles.LUNDI.Amphi),
            salles.LUNDI.Amphi.map((salle) => {
                return(
                    <div className="card">
                        <h4>{salle.nom}</h4>
                    </div>
                )
            })
*/