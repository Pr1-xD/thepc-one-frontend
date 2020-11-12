import React,{useEffect, useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home/Home'
import Events from './Events/Events'
import './App.css';

function App() {
  const [page,setPage]=useState('Home')
  const [loggedin,setLoggedIn]=useState(false)
  const [data,setData]=useState({eventsRegistered:[]})
  const [token,setToken]=useState({})

  function pageSetter(val){
    setPage(val)
    sessionStorage.setItem('page',val)
  }

  function logoutHandler(val){
    setLoggedIn(val)
    setPage('Home')
    setData({eventsRegistered:[]})
    setToken({})
    sessionStorage.clear()
  }

  function loginStateHandler(val,data){
    const login=val 
    setLoggedIn(login) 
    setData(data) 
    setToken(data.tokens[data.tokens.length-1])
    sessionStorage.setItem('data',JSON.stringify(data))
  }

  function refreshLogin(){
    console.log('Loaded')
    if (sessionStorage.getItem('data')){
    loginStateHandler(true,JSON.parse(sessionStorage.getItem('data')))
    if (sessionStorage.getItem('page'))
    pageSetter(sessionStorage.getItem('page'))
    else
    pageSetter('Home')  
  }}
 
  return (
    <div className="app" onLoad={refreshLogin}>
      {page=='Home'?<Home pageSetter={pageSetter}  data={data} token={token} loggedin={loggedin} loginStateHandler={loginStateHandler} logoutHandler={logoutHandler}/>:<></>}
      {(page=='Events')&&(loggedin)?<Events pageSetter={pageSetter} userData={data} logoutHandler={logoutHandler}/>:<></>}
    </div>
  );
}

export default App;