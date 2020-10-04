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
          <div>
            {       
                    salles.MARDI[0].Amphi.map((salle) => {
                        return (
                          <div>
                             
                            <h4>{salle.nom}</h4>

                          </div>
                        )
                    }
                    )
                }
          </div>
          
      )
  }
      

}

export default Mardi;