import logo from './logo.svg';
import './App.css';
// import Login from './Login';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
        <h1 style={{fontSize: "32px", fontWeight:'500'}}>React Login Using OAuth2.0</h1>
        <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
        />
    </div>
  );
}

export default App;
