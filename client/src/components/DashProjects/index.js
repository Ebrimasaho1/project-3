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
        <div className="row">
          <div className="col-md-4">
            <p>{lesson.title}</p>
          </div>
          <div className="col-md-4">
            <p>{lesson.project}</p>
          </div>
          <div className="col-md-4">
            <p>{lesson.organization}</p>
          </div>
        </div>
      ))
    );
  }
}

export default DashProjects;
