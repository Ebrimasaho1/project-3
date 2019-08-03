import React from 'react';

import Header from '../Header';
import DashProjects from '../DashProjects';
import AddBtn from '../AddBtn';
import "./dashContent.css";

const DashContent = (props) => {


  return (
    <div className="col-md">
      <Header />
      <AddBtn />
      <div className="container dash-content">
        <DashProjects />
      </div>
     
    </div>
  );




}

export default DashContent;