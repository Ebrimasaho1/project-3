import React from 'react';
import './dashproj.css'

import api from '../../utils/api';

const DashProjects = () => {


  //1. Get data via AJAX (get)
  //2. in the .then()

    api.getLessonPlans().then((results) => {
    console.log(results.data);
    
  });

  return ( 
    <div className="container">
    <div className="row">
      <div className="col-md-4">
      <h3>My Lessons</h3>
      {/* <p>{results.data[0].title}</p> */}
      <p>things</p>
      </div> 
      <div className="col-md-4">
      <h3>My Projects</h3>
      <p>project</p>
      <p>project things</p>
      </div> 
      <div className="col-md-4">
      <h3>My Organizations</h3>
      <p>organization</p>
      <p>IRC</p>
      </div> 
    </div>
  </div>
   );
}
 
export default DashProjects;
