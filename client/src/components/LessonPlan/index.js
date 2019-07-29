
import React from 'react';
import { Link } from 'react-router-dom';

class LessonPlan extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="col-md-4">
          <Link to={{
            pathname: '/lessonPlan',
            state: { id: this.props.lesson._id }
          }}>{this.props.lesson.title}</Link>

        </div>
        <div className="col-md-4">
          <p>{this.props.lesson.project.name}</p>
        </div>
        <div className="col-md-4 d-flex justify-content-between">
          <p>{this.props.lesson.project.organization.name}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default LessonPlan;


