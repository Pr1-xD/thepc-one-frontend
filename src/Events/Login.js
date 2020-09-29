import React from 'react';
import { GoogleLogin } from 'react-google-login'

const clientID= '390060085294-k1l5r25ugf2jpsqorsmns7m8o3ject6f.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) =>{
        console.log("Success")
        console.log(res.tokenId)
    }
    const onFailure = (res) =>{
        console.log("Failure")
        console.log(res)
    }
    return(
        <div>
           <GoogleLogin
           clientId={clientID}
           buttonText="Login"
           onSuccess={onSuccess}
           onFailure={onFailure}
           cookiePolicy={'single_host_origin'}
           style={{ marginTop: '100px'}}
           isSignedIn={true}
           />
        </div>
    )
}

export default Login;
