import React from 'react';

import Header from '../Header';
import DashProjects from '../DashProjects';
import AddBtn from '../AddBtn';
import "./dashContent.css";
import TableHeader from '../TableHeader';

const DashContent = (props) => {


  return (
    <div className="container">
      <div className="row">
<Header/>
      </div>
      <div className="row">
 <AddBtn />
      </div>
      
     
  <table className="table">
  <thead>
    <tr>
      <TableHeader />
      </tr>
       </thead>
      <tbody>
        <DashProjects />
      </tbody>
      </table>
      
    </div>
  );




}

export default DashContent;