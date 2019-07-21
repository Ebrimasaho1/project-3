import React from 'react';
import './dashproj.css'

import api from '../../utils/api';

const DashProjects = () => {
  //1. Get data via AJAX (get)
  //2. in the .then()

  let userId = sessionStorage.getItem("currentUserId");

  console.log("UserId Read from session: " + userId);

  api.getLessonPlans(userId).then((results) => {
    console.log(results.data);
  });

  return ( 
    <div className="container">
    <div className="row">
      <div className="col-md-4">
      <h3>My Lesson Plans</h3>
      {/* <p>{results.data[0].title}</p> */}
      <p>things</p>
      </div> 
      <div className="col-md-4">
      <h3>Project</h3>
      <p>project</p>
      </div> 
      <div className="col-md-4">
      <h3>Organization</h3>
      <p>organization</p>
      </div> 
    </div>
  </div>
   );
}
 
export default DashProjects;
