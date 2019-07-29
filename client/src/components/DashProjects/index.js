import React from 'react';
import './dashproj.css'
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import DeleteBtn from '../DeleteBtn';

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
          {lessons : this.state.lessons}
        );
      }
    }
  }


  render() {

    return (
      this.state.lessons.map(lesson => (
        <div className="row" key={lesson._id}>
          <div className="col-md-4">
            <Link to={{
              pathname: '/lessonPlan',
              state: { id: lesson._id }
            }}>{lesson.title}</Link>

          </div>
          <div className="col-md-4">
            <p>{lesson.project.name}</p>
          </div>
          <div className="col-md-4 d-flex justify-content-between">
            <p>{lesson.project.organization.name}</p>
            <DeleteBtn lessonId={lesson._id} updateLessons={this.updateLessons} />
          </div>
        </div>
      ))
    );
  }
}

export default DashProjects;
