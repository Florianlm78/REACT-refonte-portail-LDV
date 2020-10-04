import React from 'react';
import '../css/jours.css';
import {BrowserRouter as Router,
  Route,
  Link,
  Switch,
  } from 'react-router-dom';


import Lundi from './jours/lundi';
import Mardi from './jours/mardi';
import Mercredi from './jours/mercredi';
import Jeudi from './jours/jeudi';
import Vendredi from './jours/vendredi';

function Salles() {
  return(
  <header className="App-header">

<Router>
        <div className="nav">
          <header className="header-nav">
            <nav className="salle-nav">
              <ul className="salle-ul">
                <li><Link to="/lundi">Lundi</Link></li>
                <li><Link to="/mardi">Mardi</Link></li>
                <li><Link to="/mercredi">Mercredi</Link></li>
                <li><Link to="/jeudi">Jeudi</Link></li>
                <li><Link to="/vendredi">Vendredi</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/lundi" component={Lundi} />
              <Route path="/mardi" component={Mardi} />
              <Route path="/mercredi" component={Mercredi} />
              <Route path="/jeudi" component={Jeudi} />
              <Route path="/vendredi" component={Vendredi} />
            </Switch>
          </main>
        </div>
      </Router >



      </header>
    )
}

export default Salles