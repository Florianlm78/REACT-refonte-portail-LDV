import React, { Component } from 'react';
import '../../css/salles.css';
import salles from '../../salles';
import Amphi from '../../components/Amphi'


class Mardi extends Component {

  state = {
    salles
}
  render(){


      return(
        <section>
          <h2>PULV - Amphi</h2>
          <article>
          
            {       
                    salles.MARDI[0].Amphi.map((salle) => {
                        return (
                          <div>
                            {console.log(salles.MARDI[0])}
                            <h4>{salle.nom}</h4>
                            <p>Matin</p>
                            <svg width="15" height="15">
                <circle cx="7.5" cy="7.5" r="7.5" fill={salle.matin ? "green" : "red"} />
                
            </svg>
            
            <p>Après-Midi</p>
            <svg width="15" height="15">
              <circle cx="7.5" cy="7.5" r="7.5" fill={salle.aprem ? "green" : "red"} />
            </svg>
                          </div>
                        )
                    }
                    )
                }
          </article>
          <h2>ILV - IIM - Salle de cours</h2>
          <article>
            {
                salles.MARDI[0].Salles.map((salle) => {
                  return (
                    <div>
                      {console.log(salles.MARDI[0])}
                      <h4>{salle.nom}</h4>
                      <p>Matin</p>
                            <svg width="15" height="15">
                <circle cx="7.5" cy="7.5" r="7.5" fill={salle.matin ? "green" : "red"} />
                
            </svg>
            
            <p>Après-Midi</p>
            <svg width="15" height="15">
              <circle cx="7.5" cy="7.5" r="7.5" fill={salle.aprem ? "green" : "red"} />
            </svg>
                    </div>
                  )
              }
              )
            }
          </article>
        </section> 
      )
  }
      

}

export default Mardi;