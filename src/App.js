import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Home/Home'
import Events from './Events/Events'
import './App.css';

function App() {

  const [page,setPage]=useState('Home')
  const [loggedin,setLoggedIn]=useState(false)
  const [data,setData]=useState({eventsRegistered:[]})
  const [token,setToken]=useState({})

  function pageSetter(val){setPage(val)}
  function logoutHandler(val){
    setLoggedIn(val)
    setPage('Home')
  }

  function loginStateHandler(val,data){
    const login=val
    console.log(data) 
    setLoggedIn(login) 
    setData(data) 
    setToken(data.tokens[data.tokens.length-1])
  }

  React.useEffect(()=>{console.log(token)},[token])
 
  return (
    <div className="app">
      {page=='Home'?<Home pageSetter={pageSetter}  data={data} token={token} loggedin={loggedin} loginStateHandler={loginStateHandler} logoutHandler={logoutHandler}/>:<></>}
      {(page=='Events')&&(loggedin)?<Events pageSetter={pageSetter} userData={data} logoutHandler={logoutHandler}/>:<></>}
      {/* <Switch>
      <Route path = "/home" component = {Home} /
      <Route path = "/events" component = {Events} />
      </Switch> */}
    </div>
  );
}

export default App;