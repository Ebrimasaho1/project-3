import React from 'react';

import Header from '../Header';
import DashProjects from '../DashProjects';
import AddBtn from '../AddBtn';

const DashContent = (props) => {

  if (props.content) {
    return ( 
      <div className="col-md">
        <Header title={props.content.title} />
        <DashProjects />
        <AddBtn />
      </div> 
      );
  }

return null ;

}
 
export default DashContent;