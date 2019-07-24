
import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
//import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom';
//import Dashboard from "./Dashboard";
import "./login.css";

import api from '../utils/api'


class Login extends Component {
  constructor(props) {
    super(props);

    if (sessionStorage.getItem('currentUserId') == null) {
      var loggedIn = false;
    } else {
      loggedIn = true;
    }

    this.state = {
      isLoggedIn: loggedIn
    }
  }

  responseGoogle = (response) => {

    var name = response.w3.ig
    var email = response.w3.U3

    var user = { fullName: name, email: email };
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    api.saveUser(user).then((res) => {
      console.log("User Id: " + res.data[0]._id);
      sessionStorage.setItem("currentUserId", res.data[0]._id);
      //redirect to dashboard
      this.setState({
        isLoggedIn: true
      })
    });
  };

  failedToLogin = (response) => {
    console.log(response);
    return <Redirect to='/home' />
  };


  render() {

    if (this.state.isLoggedIn) {
      return <Redirect to='/dashboard' />
    } else {
      return (

        <div className="Login" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>

<<<<<<< HEAD
<img className='welcome' ></img>
=======
<img  className='welcome' alt="Welcome"></img>
>>>>>>> ab7d2fd635ddf9ec09d565209e53f65ff19df65f
          <div className="Container">
           
          <GoogleLogin className="mx-auto"
            clientId="547450952468-l421k7hpgmguervl65qd35ci8gpvrgs7.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.failedToLogin}
            cookiePolicy={'single_host_origin'}
          />
          </div>
        </div>
      )
    }
  }
}

export default Login;

