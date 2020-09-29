import React,{useState} from 'react';
import axios from 'axios'

function Login(){
        const [email,setEmail]=useState("")
        const [pass,setPass]=useState("")
        function handleLogin(e)
        {
        e.preventDefault()
        console.log("clicked")
        console.log(email,pass)
        axios.post('https://thepc-one.herokuapp.com/api/user/login',
        {
            email:email,
            password : pass
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
        }

        return(
            
                <div className="sidebar_form">
                <form className="form-signin" onSubmit="return false" >
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={e=>setEmail(e.target.value)} required/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={e=>setPass(e.target.value)} required/>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={handleLogin}>Login</button>
                    <div className="orText">OR</div>
                    <div className="home_google">
                    {/* <img src={google} /> */}
                    </div>

                </form>
                </div>
            
        ) 
}

export default Login;