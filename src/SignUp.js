import React,{useState} from 'react';
import axios from 'axios'

function SignUp(props){
    function loginStateHandler(val,data){
      props.loginStateHandler(val,data)
      console.log('Passed');
    }
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [cnfpass,setCnfPass]=useState("")
    const [warning,setWarning]=useState("")
 
    function handleSignIn(e)
      {
        e.preventDefault()
        if(signupFormValidator()){
        console.log("clicked")
        console.log(name,email,pass,cnfpass)
        axios.post('https://thepc-one.herokuapp.com/api/user/signup',
        {
          email:email,
          password : pass,
          password2 : cnfpass,
          name: name
        })
        .then((response) => {
          console.log(response);
          if(response.status===200)
            loginStateHandler(true,response.data)
            setWarning("")
        }, (error) => {
          console.log(error);
          setWarning("Invalid Details")
        });
      }}

      function signupFormValidator(){
        let flag=true
        // if((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)==false)
        if(email.length===0)
        {   setWarning("Email ID Invalid")
            flag=false  }
        else if(pass.length===0)
        {   setWarning("Password Invalid")
            flag=false  }
        else if(pass!==cnfpass)
        {   setWarning("Passwords do not match")
            flag=false  }
        return flag 
    }

        return(
            
              <div className="sidebar_form">
                <form className="form-signin">
                    <label for="inputEmail" class="sr-only">Name</label>
                    <input type="text" id="signUpName" className="form-control" placeholder="Name" onChange={e=>setName(e.target.value)} required/>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={e=>setEmail(e.target.value)} required/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="signUpPassword" className="form-control" placeholder="Password" onChange={e=>setPass(e.target.value)} required/>
                    <label for="inputCnfPassword" class="sr-only">Confirm Password</label>
                    <input type="password" id="signUpCnfPassword" className="form-control" placeholder="Confirm Password" onChange={e=>setCnfPass(e.target.value)} required/>
                    <p>{warning}</p>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSignIn}>Sign in</button>

                    <div className="orText">OR</div>

                    <div className="home_google">
                    {/* <img src={google} alt="google-login" onClick={()=>oauthSignIn()}  /> */}
                    </div>
                </form>
                </div>
            
        ) 
}

export default SignUp;