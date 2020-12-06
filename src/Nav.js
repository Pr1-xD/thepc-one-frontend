import React,{useState} from 'react'
import SignUp from './SignUp'
import Login from './Login'
import logo from './Images/t1-logo.png'
import logoDark from './Images/T1LogoDark.png'
import './NavAfter.css'
import ScrollAnimation from 'react-animate-on-scroll';
import DarkToggle from './Home/DarkToggle'
import Alert from './Home/Alert'

function Nav(props)
{ 
  const eventsList=props.eventsList
  const darkTheme=props.darkTheme
  function setDarkTheme(val){
    if(val)
    document.body.style.backgroundColor="#181818"
    else
    document.body.style.backgroundColor="white"
    console.log(val)
    props.setDarkTheme(val)}   

  function loginStateHandler(val,data){
      props.loginStateHandler(val,data)
    }

  const [loginSidebar,setLoginSidebar] = useState(false);
  const [signupSidebar,setSignupSidebar] = useState(false);

  const showLoginSidebar = ()=> {
    return(
      setLoginSidebar(!loginSidebar)
    )};

  const showSignupSidebar = () => {
    return(
      setSignupSidebar(!signupSidebar)
    )};

  const closeLoginSidebar = () =>{
    return(
      setLoginSidebar(!loginSidebar)
    )
  };

  const closeSignupSidebar =() =>{
    return(
      setSignupSidebar(!signupSidebar)
    )
  }


    return(

    <div>
      
      <nav className={darkTheme?"navbar navbar-expand-lg navbar-light navbar-custom-dark bg-white home fixed-top navbar-custom":"navbar navbar-expand-lg navbar-light bg-white home fixed-top navbar-custom"}>{/* ADD CONDITIONAL RENDERING */}
      {/* {eventsList?<Alert  eventsList={eventsList} />:<></>} */}
    <a className="navbar-brand navAfter_leftText mr-auto ">
      <img src={darkTheme?logoDark:logo} className='nav-logo' className="nav-logo"/></a>
            
            <button className="navbar-toggler float-right customIcon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                  <div className="nav-dark-toggle" >
                    <span className={darkTheme?"nav-dark-toggle-span-dark":"nav-dark-toggle-span"}>Dark Theme</span>
                  <DarkToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                  </div>
                
                    <a className="navAfter_myEventButton navAfter_myEventButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="login" onClick={showLoginSidebar}> LOGIN <span className="sr-only">(current)</span></a>
                    <a className="navAfter_logoutButton navAfter_logoutButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="signup" onClick={showSignupSidebar}><span className="logoutColor">SIGN UP</span></a>
                </div>
            </div>
        </nav>
         
          <div className={loginSidebar ? 'sidebar_loginActive' : 'sidebar_loginNotActive'}>
          <div className="crossIcon" onClick={closeLoginSidebar}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    </div>
    <div className="sidebar_loginText">LOGIN</div>
    <Login loginStateHandler={loginStateHandler} />
    </div>
        <div className={signupSidebar ? 'sidebar_signupActive' : 'sidebar_signupNotActive'}>
        <div className="crossIcon" onClick={closeSignupSidebar}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </div>
        <div className="sidebar_signupText">SIGN UP</div>
        <SignUp loginStateHandler={loginStateHandler}/>
        </div>
        
    </div>
    )
}

export default Nav