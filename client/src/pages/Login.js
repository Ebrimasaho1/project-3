
import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import api from '../utils/api';

class Login extends Component {
  constructor(props){
    super(props);

    if(props.user){
      alert("You can't login if you're logged in")
      props.history.push('/dashboard');
    }
  }

  render() {
    const responseGoogle = (response) => {
      //console.log(response);
      console.log(response);
      var name=response.w3.ig
      console.log(name);
      var email=response.w3.U3
      console.log(email);

    
      var user = {fullName:name, email:email};
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      api.saveUser(user);

      //Redirect to dashbaord
      //Need to know corsOptions
    }

    return (
      <Router>
      <GoogleLogin
        clientId="547450952468-l421k7hpgmguervl65qd35ci8gpvrgs7.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </Router>
    )
  }
}

export default Login;

