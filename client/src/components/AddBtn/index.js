import React from "react";
import "./addbtn.css";

function AddNewBtn(props) {
  return (
    <div className="d-flex justify-content-beginning">
      <button type="button" className="btn btn-secondary">
        Add New Lesson
      </button>
    </div>
  );
}

export default AddNewBtn;
