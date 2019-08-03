

import React from 'react';


const TableHeader = (props) => {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  console.log("Current User from header:" + currentUser.fullName);
  return (
    <React.Fragment>
     <th>
          <h3>My Lesson Plans</h3>
          </th>
          <th >
            <h3>Project</h3>
          </th>
          <th>
            <h3>Organization</h3>
          </th>
          <th>
            </th>
    </React.Fragment>
  );
}

export default TableHeader;