import React,{useState} from 'react'
import SignUp from './SignUp'
import Login from './Login'
function Nav(props)
{      
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
      <nav class="navbar navbar-expand-lg navbar-light bg-white home fixed-top navbar-custom">
            <a class="navbar-brand navAfter_leftText mr-auto">THEPC ONE</a>
            <button class="navbar-toggler float-right customIcon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <a class="navAfter_myEventButton navAfter_myEventButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="login" onClick={showLoginSidebar}> LOGIN <span class="sr-only">(current)</span></a>
                    <a class="navAfter_logoutButton navAfter_logoutButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="signup" onClick={showSignupSidebar}><span className="logoutColor">SIGN UP</span></a>
                </div>
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