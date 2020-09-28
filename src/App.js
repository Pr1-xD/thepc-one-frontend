import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home/Home'
import Events from './Events/Events'
import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
      <Route path = "/home" component = {Home} />
      <Route path = "/events" component = {Events} />
      </Switch>
    </div>
  );
}

export default App;