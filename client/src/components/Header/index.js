import React from 'react';
import './header.css'

const Header = (props) => {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  console.log("Current User from header:" + currentUser.fullName);
  return ( 
    <div className="header__wrap">
      <h1>{currentUser.fullName} Dashboard</h1>
    </div>
   );
}
 
export default Header;