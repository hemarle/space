import React from 'react';
import './App.css';
import Crew from './Crew';
import Destination from './Destination';
import Homepage from './Homepage';
import Launch from './Launch';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
    <Switch>

<Route exact path='/' component={Homepage} />
<Route path='/destination' component= {Destination}/>
<Route path='/crew' component= {Crew}/>
<Route path='/launch' component= {Launch}/>
  
 


    </Switch>


      </Router>

    
    </div>
  );
}

export default App;
