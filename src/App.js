import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import './App.css';

import Home from './containers/Home';
import Pokemon from './containers/Pokemon';
import PokemonProfile from './containers/PokemonProfile';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/pokemon" exact component={Pokemon} />
      <Route path="/pokemon/:id" exact component={PokemonProfile} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
  )

}

export default App;
