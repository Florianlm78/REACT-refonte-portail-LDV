import React, { Component } from 'react';
import '../../css/salles.css';
import salles from '../../salles';
import Amphi from '../../components/Amphi'


class Mardi extends Component {

  state = {
    salles
}
  render(){

    
    const cards = Object.keys(this.state.salles.MARDI).map(key => <Amphi key={key} details={this.state.salles[key]} />);

      return(
          <div>
            {       
                    salles.MARDI[0].Amphi.map((salle) => {
                        return (
                          <div>
                            {console.log(salles.MARDI[0])}
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