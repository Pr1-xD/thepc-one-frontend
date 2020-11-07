import React,{ useState,useEffect } from 'react';
import './Home.css';
import Nav from '../Nav'
import NavAfter from '../NavAfter'
import Eventshome from '../Eventshome'
import axios from 'axios'

function Home(props){

  let token=props.token
  let data=props.data
  let loggedin=props.loggedin

  function pageSetter(val){props.pageSetter(val)}
  function loginStateHandler(val,data){props.loginStateHandler(val,data)}
  function logoutHandler(val){props.logoutHandler(val)}                         

  function eventsRegister(val){
      let link='https://thepc-one.herokuapp.com/api/user/'+val.eventID
      let header='Bearer '+(token.token)
      console.log(header)
        axios.patch(link,{},{headers: {authorization:header}})
                .then(res => {console.log(res.data)})               
  }

  return(
      <div className="home">
          {loggedin ? <NavAfter pageSetter={pageSetter} logoutHandler={logoutHandler}/> : <Nav loginStateHandler={loginStateHandler}/>}
          <br/>
          <div className="welcomeText" >Welcome to</div>
          <div className="thepcText">THEPC </div>
          <div className="oneText">ONE</div>
          <div className="input_boxColor">
          <div className="colorBox"></div>
          </div>
          <div className="descriptionText">All events. One Portal.</div>
          <div className="homeImage"><img src="https://picsum.photos/seed/picsum/350/450" alt=""/></div>
          <br/>
          <br/>
          <div className="arrowIcon">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
          <Eventshome eventsRegister={eventsRegister} data={data}/>
      </div>
    ) 
}

export default Home;
// onClick={()=>{console.log(sessionStorage.getItem('item'))}}