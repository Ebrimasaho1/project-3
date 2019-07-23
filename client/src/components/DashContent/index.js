import React from 'react';

import Header from '../Header';
import DashProjects from '../DashProjects';
import AddBtn from '../AddBtn';

const DashContent = (props) => {

 
    return ( 
      <div className="col-md">
        <Header />
        <DashProjects />
        <AddBtn />
      </div> 
      );
  



}
 
export default DashContent;