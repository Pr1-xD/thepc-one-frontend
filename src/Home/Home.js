import React,{ useState,useEffect } from 'react';
import './Home.css';
import Nav from '../Nav'
import NavAfter from '../NavAfter'
import Eventshome from '../Eventshome'
import axios from 'axios'

function Home(props){
  
  const [loggedin,setLoggedIn]=useState(false)
  const [data,setData]=useState({eventsRegistered:[]})
  const [token,setToken]=useState({})

  function pageSetter(val){
    props.pageSetter(val)
  }                         
  function dataSetter(val){
    props.dataSetter(val)
  }

  function eventsRegister(val){
      console.log('Reached')
      
      let link='https://thepc-one.herokuapp.com/api/user/'+val.eventID
      let header='Bearer '+(token.token)
      
        console.log(header)
        axios.patch(link,{},
        {
            headers: {authorization:header}
        }
        )
                .then(res => {
                console.log(res);
                console.log(res.data);
                })    
        console.log(data)           
  }
  
  function loginStateHandler(val,data){
    const login=val  //true value getting passed from the login.js
    console.log(data) 
    setLoggedIn(login) //putting the state login as true
    setData(data) //??no use--i think this data is not getting stored
    dataSetter(data)
    setToken(data.tokens[data.tokens.length-1])
  }
  React.useEffect(()=>{console.log(token)},[token])

  function logoutHandler(val){
    setLoggedIn(val)
  }

  return(
      <div className="home">
          {loggedin ? <NavAfter pageSetter={pageSetter} logoutHandler={logoutHandler}/> : <Nav loginStateHandler={loginStateHandler}/>}
          {/* home-page-text */}
          <div className="welcomeText">Welcome to</div>
          <div className="thepcText">THEPC </div>
          <div className="oneText">ONE</div>
          <div className="input_boxColor">
          <div className="colorBox"></div>
          </div>
          <div className="descriptionText">All events. One Portal</div>
          <div className="homeImage"><img src="https://picsum.photos/seed/picsum/350/450" alt=""/></div>
          
          <div className="arrowIcon">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
          <Eventshome eventsRegister={eventsRegister}  />
      </div>
    ) 
}

export default Home;