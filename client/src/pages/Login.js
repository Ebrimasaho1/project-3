
import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
//import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom';
//import Dashboard from "./Dashboard";

import api from '../utils/api'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }

    if (props.user) {
      alert("You can't login if you're logged in")
      props.history.push('/dashboard');
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }
  }

  render() {
    const responseGoogle = (response) => {
      console.log(response);
      var name = response.w3.ig
      console.log(name);
      var email = response.w3.U3
      console.log(email);

      var user = { fullName: name, email: email };
      sessionStorage.setItem("currentUser", JSON.stringify(user));

      api.saveUser(user).then((res) => {
        console.log("User Id: " + res.data[0]._id);
        sessionStorage.setItem("currentUserId", res.data[0]._id);
      });
      //redirect to dashboard
      this.setState({
        redirect: true
      })


    };

    const failedToLogin = (response) => {
      console.log(response);
      return <Redirect to='/home' />
    };

    return (
      <div>
        {this.renderRedirect()}
        <GoogleLogin
          clientId="547450952468-l421k7hpgmguervl65qd35ci8gpvrgs7.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={failedToLogin}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default Login;

