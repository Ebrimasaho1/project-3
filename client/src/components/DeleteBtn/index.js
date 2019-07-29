import React from "react";
import "./deletebtn.css";

function DeleteBtn(props) {
  return (
    <div className="d-flex justify-content-beginning">
      <a href="#" className="btn btn-danger" id="delete-lesson">
        x
      {/* <i class="far fa-trash-alt"></i> */}
      </a>
    </div>
  );
}

export default DeleteBtn;
