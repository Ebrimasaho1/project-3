import React from "react";
import "./addbtn.css";

function AddNewBtn(props) {
  return (
    <div className="d-flex justify-content-beginning">
      <a href="/lessonPlan" className="btn shadow-lg p-3 mb-5 bg-secondary rounded" id="add-lesson">
        Add New Lesson
      </a>
    </div>
  );
}

export default AddNewBtn;
