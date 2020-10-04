import React, { Component } from 'react';
import '../App.css';
import salles from '../salles';
import Cellule from './Amphi';

class Tableau extends Component {
    state = {
        salles
    }

    render(){

        const cards = Object.keys(this.state.salles).map(key => <Cellule key={key} details={this.state.salles[key]} />);
        console.log(cards);
    

        return( 
            <div className="box">
                <div className="cards">
                    {cards}

 
                </div>
            </div>
        )
    }
        

}

export default Tableau;
