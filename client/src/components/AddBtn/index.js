import React from "react";
import { Link } from 'react-router-dom';
import "./addbtn.css";

function AddNewBtn(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
        <Link className="btn" id="add-lesson" to={{pathname: '/lessonPlan'}}>
           Add New Lesson
        </Link>
        </div>
      </div>
    </div>
  );
}

export default AddNewBtn;

