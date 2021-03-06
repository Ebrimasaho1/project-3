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
    <td>
      {/* <button className="btn btn-danger" id="delete-lesson" onClick={this.deleteLesson}> */}
        <i className="btn btn-danger far fa-trash-alt" id="delete-lesson" onClick={this.deleteLesson}></i>
      {/* </button> */}
    </td>
  );
}
}

export default DeleteBtn;
