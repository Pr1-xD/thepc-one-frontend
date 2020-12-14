import React from 'react';
import './HomeDark.css';
import './Home.css';
import Nav from '../Nav'
import NavAfter from '../NavAfter'
import Eventshome from '../Eventshome'
import DarkToggle from './DarkToggle'
import Alert from './Alert'

function Home(props){

  let token=props.token
  let data=props.data
  let loggedin=props.loggedin
  const eventsList=props.eventsList
  function setData(val){
    console.log(val)
    props.setData(val)}
  function setEventsList(val){props.setEventsList(val)}
  function pageSetter(val){props.pageSetter(val)}
  function loginStateHandler(val,data){props.loginStateHandler(val,data)}
  function logoutHandler(val){props.logoutHandler(val)}
  const darkTheme=props.darkTheme
  function setDarkTheme(val){
    props.setDarkTheme(val)}                         


  return(
    <>
      <div className={darkTheme?"home-dark bg-dark":"home bg"}>{/* ADD CONDITIONAL RENDERING */}
          {/* <Alert /> */}
          {loggedin ? <NavAfter pageSetter={pageSetter} logoutHandler={logoutHandler} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/> : <Nav loginStateHandler={loginStateHandler} eventsList={eventsList} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}
          <br/> 
          <div className="home-text">
          <div className={darkTheme?"welcomeTextDark":"welcomeText"}>Welcome to</div>{/* ADD CONDITIONAL RENDERING */}
          <div className={darkTheme?"thepcTextDark":"thepcText"}>THEPC </div>{/* ADD CONDITIONAL RENDERING */}
          <div className={darkTheme?"oneTextDark":"oneText"}>ONE</div>{/* ADD CONDITIONAL RENDERING */}
          <div className="input_boxColor"><div className="colorBox"></div></div>
          <div className={darkTheme?"descriptionTextDark":"descriptionText"}>One THEPC. One Portal.</div>{/* ADD CONDITIONAL RENDERING */}
          {/* <button type="button" onClick={()=>setDarkTheme(!darkTheme)}>Dark</button> */}
          
          </div>
          <br/>
          <br/>
          {/* <div className="arrowIcon">
            <svg className="arrowIconColour" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div> */}
          
      </div>
      
      <Eventshome data={data} setData={setData} token={token} eventsList={eventsList} setEventsList={setEventsList} darkTheme={darkTheme}  />
      </>
    ) 
}

export default Home;