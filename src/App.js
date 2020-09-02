import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
      <Route path = "/home" component = {Home} />
      <Route path = "/about" component = {About} />
      </Switch>
    </div>
  );
}

export default App;
