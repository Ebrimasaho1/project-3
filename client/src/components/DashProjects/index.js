import React from 'react';
import './dashproj.css'

import api from '../../utils/api';

class DashProjects extends React.Component {

  state = {
    lessons: [],
    userId: sessionStorage.getItem("currentUserId"),
  }
  
  componentDidMount() {
    api.getLessonPlans(this.state.userId).then((results) => {
      console.log(results.data);
      this.setState({ lessons: results.data.lessonPlans });
    });
  }

  render() {

    return (
      this.state.lessons.map(lesson => (
        <div className="row" key={lesson._id}>
          <div className="col-md-4">
            <p>{lesson.title}</p>
          </div>
          <div className="col-md-4">
            <p>{lesson.project.name}</p>
          </div>
          <div className="col-md-4">
            <p>{lesson.project.organization.name}</p>
          </div>
        </div>
      ))
    );
  }
}

export default DashProjects;
