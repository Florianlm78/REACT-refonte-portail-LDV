import React from 'react';

import './App.css';



import {BrowserRouter as Router,
        Route,
        Link,
        Switch,
        } from 'react-router-dom';

import Calendrier from './routes/Calendrier';
import Salles from './routes/Salles';
import Home from './routes/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <header>
            <section>
              <h1> Refonte portail </h1>
            </section>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calendrier">Calendrier</Link></li>
                <li><Link to="/salles">Salles</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/calendrier" component={Calendrier} />
              <Route path="/salles" component={Salles} />
            </Switch>
          </main>
        </div>
      </Router >
      
    </div>
  );
}

export default App;
