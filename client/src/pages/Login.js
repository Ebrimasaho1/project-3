
import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

import api from '../utils/api'

class Login extends Component {
  render(){
    const responseGoogle = (response) => {
      //console.log(response);
      console.log(response);
      console.log(response.w3.ig);
      console.log(response.w3.U3);
      var user = {fullName: response.w3.ig, email: response.w3.U3};
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      api.saveUser(user);
      //redirect to dashboard
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

