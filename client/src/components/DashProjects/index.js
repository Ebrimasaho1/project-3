import React from 'react';
import './dashproj.css'

const DashProjects = () => {

  //1. Get data via AJAX (get)
  //2. in the .then()
  const myTitle = "My Title";

  return ( 
    <div className="container">
    <div className="row">
      <div className="col-md-4">
      <h3>My Lessons</h3>
      <p>{myTitle}</p>
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
