import React,{useState} from 'react'
import axios from 'axios'
import SignUp from './SignUp'
import Login from './Login'
function Nav(props)
{   
    
  function loginStateHandler(val,data){
      props.loginStateHandler(val,data)
      console.log('Pass 1');
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
        <nav className=" homeNavbar_color navbar navbar-expand-lg navbar-dark bg-primary">
            <a className=" homeNavbar_leftText navbar-brand">THEPC ONE</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

              </ul>
  
              <button className="homeNavbar_loginButton homeNavbar_loginButtonColor btn my-2 my-sm-0" type="submit" name="login" onClick={showLoginSidebar}>LOGIN</button>
              <button className="homeNavbar_signupButton homeNavbar_signupButtonColor btn my-2 my-sm-0" type="submit" name="signup" onClick={showSignupSidebar}>SIGN UP</button>
  
            </div>
          </nav> 

          <div className={loginSidebar ? 'sidebar_loginActive' : 'sidebar_loginNotActive'}>

    <div className="sidebar_loginText">LOGIN</div>


    <div className="crossIcon" onClick={closeLoginSidebar}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    </div>
    <Login loginStateHandler={loginStateHandler} />

    </div>

        <div className={signupSidebar ? 'sidebar_signupActive' : 'sidebar_signupNotActive'}>
        <div className="sidebar_signupText">SIGN UP</div>
        <div className="crossIcon" onClick={closeSignupSidebar}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </div>
        <SignUp loginStateHandler={loginStateHandler}/>
        </div>
    </div>
    )
}

export default Nav