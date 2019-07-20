import React from "react";
import "./addbtn.css";

function AddNewBtn(props) {
  return (
    <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-secondary">
        Add New Project
      </button>
    </div>
  );
}

export default AddNewBtn;
