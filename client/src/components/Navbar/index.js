import React from "react";
import "./navbar.css";
import { GoogleLogout } from 'react-google-login';

// Google Logout
function Logout() {
  console.log("Logout success");
  sessionStorage.removeItem('currentUserId');
  window.location.reload();
}
//End off Google Logout

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand navBar__name" href="/">
        Re:Volve
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">Project Search</a>
          </li>
          <li className="nav-item">
            <GoogleLogout
              clientId="547450952468-l421k7hpgmguervl65qd35ci8gpvrgs7.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={Logout}
            >
            </GoogleLogout>
            {/* <a className="nav-link" href="/">Logout</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;