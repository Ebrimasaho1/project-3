import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { GoogleLogout } from 'react-google-login';

// Google Logout
function Logout() {
  console.log("Logout success");
  sessionStorage.removeItem('currentUserId');
  window.location.reload();
}
//End off Google Logout

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-left collapsed' : 'navbar-toggler navbar-toggler-left';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-blue transparent-nav">
        <div className="container">
          <a className="navbar-brand navBar__name" href="/">
            <img className="logoImage" src="logo.png" style={{ height: '50px' }} alt="logo"></img>
          </a>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">Dashbboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}}to="/search">Search</Link>
              </li>
              <li className="nav-item">
                <GoogleLogout
                  clientId="547450952468-l421k7hpgmguervl65qd35ci8gpvrgs7.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={Logout}
                >
                </GoogleLogout>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
