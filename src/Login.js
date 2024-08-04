import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
// const Login = (props) = {
//     <div>
//             React
//         </div>
// }
function Login() {
    return (
        <div>
            <h1 style={{fontSize: "32px", fontWeight:'500'}}>React Login Using OAuth2.0</h1>
            <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(credentialResponse);
                }}
                onError={() => {
                console.log('Login Failed');
                }}
            />;
        </div>
    )
}
  
export default Login; 