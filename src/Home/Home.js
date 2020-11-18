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
  // const [show, setShow] = useState(true);


  function pageSetter(val){props.pageSetter(val)}
  function loginStateHandler(val,data){props.loginStateHandler(val,data)}
  function logoutHandler(val){props.logoutHandler(val)}                         


  return(
      <div className="home bg">
          {loggedin ? <NavAfter pageSetter={pageSetter} logoutHandler={logoutHandler} /> : <Nav loginStateHandler={loginStateHandler}/>}
          <br/>
          {/* <div className="d-flex justify-content-center">
            <Alert className="customAlert d-flex justify-content-center" isOpen={loggedin}>
              <span className="alertText">Logged in Successfully !!!</span>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x crossButton" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </Alert>
          </div> */}
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
          <Eventshome data={data} token={token}/>
      </div>
    ) 
}

export default Home;