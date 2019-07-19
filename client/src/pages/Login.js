
import React, { Component } from "react";
import GoogleLogin from 'react-google-login';


class Login extends Component {
  render(){
    const responseGoogle = (response) => {
      //console.log(response);
      console.log(response);
      console.log(response.w3.ig);
      console.log(response.w3.U3);
    }
    return(
      <GoogleLogin
      clientId="547450952468-l421k7hpgmguervl65qd35ci8gpvrgs7.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />  
    )}
}

export default Login;

