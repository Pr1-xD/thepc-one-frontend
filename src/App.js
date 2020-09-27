import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home'
import Events from './Events/Events'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
      <Route path = "/home" component = {Home} />
      <Route path = "/events" component = {Events} />
      </Switch>
    </div>
  );
}

export default App;
