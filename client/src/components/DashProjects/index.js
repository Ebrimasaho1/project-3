import React from 'react';
import './dashproj.css'

const DashProjects = () => {

  return ( 
    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3>My Organizations</h3>
        <p>Boy Scouts of America</p>
      </div> 
      <div className="col-md-4">
      <h3>My Projects</h3>
      <select>
          <option value="archery">Archery</option>
          <option value="camping">Camping</option>
          <option value="fishing">Fishing</option>
        </select>
      </div> 
      <div className="col-md-4">
      <h3>My Lessons</h3>
      <select>
          <option value="rangeSaftey">Range Safety</option>
          <option value="archeryActivity">Archery Activity</option>
          <option value="bowMaintenance">Bow Maintenance</option>
        </select>
      </div> 
    </div>
  </div>
   );
}
 
export default DashProjects;
