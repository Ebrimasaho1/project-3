import React from 'react';
import './dashproj.css'
import api from '../../utils/api';
import DeleteBtn from '../DeleteBtn';
import LessonPlan from '../LessonPlan';
// import MediaQuery from 'react-responsive';

class DashProjects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lessons: [],
      userId: sessionStorage.getItem("currentUserId"),
    }


    api.getLessonPlans(this.state.userId).then((results) => {
      console.log(results.data);
      this.setState({ lessons: results.data.lessonPlans });
    });
  }

  updateLessons = (id) => {
    console.log("Update lessons called with id: " + id);
    for (var i = 0; i < this.state.lessons.length; i++) {
      if (this.state.lessons[i]._id === id) {
        this.state.lessons.splice(i, 1);
        this.setState(
          { lessons: this.state.lessons }
        );
      }
    }
  }


  render() {

    return (
      this.state.lessons.map(lesson => (
        <tr id="dashcard" key={lesson._id}>
        <LessonPlan lesson={lesson} /> 
        <DeleteBtn lessonId={lesson._id} updateLessons={this.updateLessons} />
        </tr>
      ))
    );
  }
}

export default DashProjects;
