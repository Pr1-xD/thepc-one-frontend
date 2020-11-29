import React,{ useState,useEffect } from 'react';
import './Home.css';
import Nav from '../Nav'
import NavAfter from '../NavAfter'
import Eventshome from '../Eventshome'
import axios from 'axios'
import { Button , Alert} from "reactstrap";

function Home(props){

  let token=props.token
  let data=props.data
  let loggedin=props.loggedin
  const eventsList=props.eventsList
  function setData(val){
    console.log('Passed')
    console.log(val)
    props.setData(val)}
  function setEventsList(val){props.setEventsList(val)}
  function pageSetter(val){props.pageSetter(val)}
  function loginStateHandler(val,data){props.loginStateHandler(val,data)}
  function logoutHandler(val){props.logoutHandler(val)}                         


  return(
    <>
      <div className="home bg">
          {loggedin ? <NavAfter pageSetter={pageSetter} logoutHandler={logoutHandler} /> : <Nav loginStateHandler={loginStateHandler}/>}
          <br/>
          <div className="home-text">
          <div className="welcomeText" >Welcome to</div>
          <div className="thepcText">THEPC </div>
          <div className="oneText">ONE</div>
          <div className="input_boxColor"><div className="colorBox"></div></div>
          <div className="descriptionText">One THEPC. One Portal.</div>
          </div>
          <br/>
          <br/>
          <div className="arrowIcon">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
          
      </div>
      <Eventshome data={data} setData={setData} token={token} eventsList={eventsList} setEventsList={setEventsList} />
      </>
    ) 
}

export default Home;