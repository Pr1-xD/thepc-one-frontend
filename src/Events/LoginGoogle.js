import React from 'react';
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import swal from '@sweetalert/with-react'
import Login from '../Login';

const clientID= '390060085294-k1l5r25ugf2jpsqorsmns7m8o3ject6f.apps.googleusercontent.com';

function LoginGoogle(props) {

    function loginStateHandler(val,data){props.loginStateHandler(val,data)}

    function LoginSync(email,name){
        axios.post('https://thepc-one.herokuapp.com/api/google/auth',
        {
            email:email,
            username:name
        })
        .then((response) => {
            console.log(response);
            if(response.status===200)
            loginStateHandler(true,response.data)
            swal("Logged In", "Successfully!", "success",{
                button:false,
                timer:2000,
            });
        }, (error) => {
            console.log(error);
        })
        
    }

    const onSuccess = (res) =>{
        LoginSync(res.profileObj.email,res.profileObj.name)
    }
    const onFailure = (res) =>{
        console.log(res)
    }
    return(
        <div>
           <GoogleLogin
           clientId={clientID}
           buttonText="Login With Google"
           onSuccess={onSuccess}
           onFailure={onFailure}
           cookiePolicy={'single_host_origin'}
           isSignedIn={false}
           theme='dark'
           />
        </div>
    )
}

export default LoginGoogle
