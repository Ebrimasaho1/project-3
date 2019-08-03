import React from "react";
import "./deletebtn.css";
import api from "../../utils/api";

class DeleteBtn extends React.Component {

deleteLesson = () =>{
  //got to database to delete lesson
  api.deleteLessonPlan(this.props.lessonId).then(() =>{
    console.log(`${this.props.lessonId} deleted`);
  });

  this.props.updateLessons(this.props.lessonId);

  //what to update to see it reflected in dashboard??
}

render(){
  return (
    <div className="d-flex justify-content-beginning">
      <button className="btn-danger" id="delete-lesson" >
      <i class="far fa-trash-alt" onClick={this.deleteLesson}></i>
      </button>
    </div>
  );
}
}

export default DeleteBtn;
