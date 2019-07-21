import React from 'react';
import './header.css'

const Header = (props) => {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  console.log("Current User from header:" + currentUser.fullName);
  return (
    <React.Fragment>
      <div className="header__wrap">
        <h1>{currentUser.fullName} Dashboard</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>My Lesson Plans</h3>
          </div>
          <div className="col-md-4">
            <h3>Project</h3>
          </div>
          <div className="col-md-4">
            <h3>Organization</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;