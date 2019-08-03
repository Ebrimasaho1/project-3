import React from "react";
import "./addbtn.css";

function AddNewBtn(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <a href="/lessonPlan" className="btn shadow-lg p-3 mb-5 bg-secondary rounded" id="add-lesson">
            Add New Lesson
      </a>
        </div>
      </div>
    </div>
  );
}

export default AddNewBtn;
