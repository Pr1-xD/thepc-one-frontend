import React,{useState} from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home/Home'
import Events from './Events/Events'
import './App.css';

function App() {
  const [page,setPage]=useState('Home')
  const [data,setData]=useState({})
  function pageSetter(val){   // Now this function will be called(page setter) and according to the value , page value will get changed
    setPage(val)
  }
  function dataSetter(val){
    setData(val)
  }
  return (
    <div className="app">
      {page=='Home'?<Home pageSetter={pageSetter} dataSetter={dataSetter}/>:<Events pageSetter={pageSetter} userData={data}/>}
      {/* <Switch>
      <Route path = "/home" component = {Home} /
      <Route path = "/events" component = {Events} />
      </Switch> */}
    </div>
  );
}

export default App;