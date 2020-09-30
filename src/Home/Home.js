import React,{ useState,useEffect } from 'react';
import './Home.css';
import google from './google.png';
import axios from 'axios'
import Nav from '../Nav'


function Home(){

 

  const [loggedin,setLoggedIn]=useState(false)
  const [data,setData]=useState({})
  
  function loginStateHandler(val,data){
    const login=val
    console.log(data)
    setLoggedIn(login)
    setData(data)
  }
  React.useEffect(()=>{console.log(loggedin)})

  

  return(
      <div className="home">
          <Nav loginStateHandler={loginStateHandler}/>
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
      </div>
    ) 
}

export default Home;