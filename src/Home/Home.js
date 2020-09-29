import React,{ useState } from 'react';
import './Home.css';
import google from './google.png';
import axios from 'axios'


function Home(){

  const [loginSidebar,setLoginSidebar] = useState(false);
  const [signupSidebar,setSignupSidebar] = useState(false);

  const showLoginSidebar = (e)=> {
    return(
      setLoginSidebar(!loginSidebar),
      console.log(e.target.name)
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
  //   https://accounts.google.com/o/oauth2/v2/auth?
  //  scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
  //  include_granted_scopes=true&
  //  response_type=token&
  //  state=state_parameter_passthrough_value&
  //  redirect_uri=https%3A//oauth2.example.com/code&
  //  client_id=client_id
  // 390060085294-k1l5r25ugf2jpsqorsmns7m8o3ject6f.apps.googleusercontent.com
  function googleLogin()
      { console.log('Clicked')
        axios.get('https://thepc-one.herokuapp.com/api/google?response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/events&client_id=390060085294-k1l5r25ugf2jpsqorsmns7m8o3ject6f.apps.googleusercontent.com')
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
      }

  function oauthSignIn() {
      // Google's OAuth 2.0 endpoint for requesting an access token
      var oauth2Endpoint = 'https://thepc-one.herokuapp.com/api/google';
    
      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      var form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);
    
      // Parameters to pass to OAuth 2.0 endpoint.
      var params = {'client_id': '390060085294-k1l5r25ugf2jpsqorsmns7m8o3ject6f.apps.googleusercontent.com',
                    'redirect_uri': 'http://localhost:3000',
                    'response_type': 'token',
                    // 'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                    // 'include_granted_scopes': 'true',
                    'state': 'pass-through value'};
    
      // Add form parameters as hidden input values.
      for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
         }
  
        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
       }

  return(
      <div className="home">
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

          {/* sidebar-login */}
          
          <div className={loginSidebar ? 'sidebar_loginActive' : 'sidebar_loginNotActive'}>

            <div className="sidebar_loginText">LOGIN</div>


            <div className="crossIcon" onClick={closeLoginSidebar}>

              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>

            </div>
            <div className="sidebar_form">
              <form className="form-signin">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div className="checkbox mb-3">
                  <label className="sidebar_formDescription">
                    <input  type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                <div className="orText">OR</div>

                <div className="home_google">
                  <img src={google} />
                </div>

              </form>
            </div>

          </div>

          {/* sidebar-signup */}
          <div className={signupSidebar ? 'sidebar_signupActive' : 'sidebar_signupNotActive'}>

            <div className="sidebar_signupText">SIGN UP</div>

            <div className="crossIcon" onClick={closeSignupSidebar}>

              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>

            </div>
            
            <div className="sidebar_form">
              <form className="form-signin">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div className="checkbox mb-3">
                  <label className="sidebar_formDescription">
                    <input  type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                <div className="orText">OR</div>

                <div className="home_google">
                  <img src={google} alt="google-login" onClick={()=>oauthSignIn()}  />
                </div>
              </form>
            </div>

          </div>

      </div>
    ) 
}

export default Home;