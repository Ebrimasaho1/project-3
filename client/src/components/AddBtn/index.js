import React from "react";
import "./addbtn.css";

function AddNewBtn(props) {
  return (
    <div className="container d-flex justify-content-beginning">
      <a href="/lessonPlan" className="btn btn-secondary" id="add-lesson">
        Add New Lesson
      </a>
    </div>
  );
}

export default AddNewBtn;
