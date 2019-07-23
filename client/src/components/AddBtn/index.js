import React from "react";
import "./addbtn.css";

function AddNewBtn(props) {
  return (
    <div className="d-flex justify-content-beginning">
      <a href="/lessonPlan" className="btn btn-secondary">
        Add New Lesson
      </a>
    </div>
  );
}

export default AddNewBtn;
