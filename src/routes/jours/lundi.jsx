import React, { Component } from 'react';
import '../../css/salles.css';
import salles from '../../salles';
import Amphi from '../../components/Amphi'


class Lundi extends Component {

  state = {
    salles
}
  render(){


      return(
        <section>
          <article>
            {       
                    salles.LUNDI[0].Amphi.map((salle) => {
                        return (
                          <div>
                            {console.log(salles.LUNDI[0])}
                            <h4>{salle.nom}</h4>
                          </div>
                        )
                    }
                    )
                }
          </article>

          <article>
            {
                salles.LUNDI[0].Salles.map((salle) => {
                  return (
                    <div>
                      {console.log(salles.LUNDI[0])}
                      <h4>{salle.nom}</h4>
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

export default Lundi;