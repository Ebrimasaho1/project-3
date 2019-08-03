import React from 'react';
import { Link } from 'react-router-dom';
import './lessonplan.css'

class LessonPlan extends React.Component {

  render() {
    return (
      <React.Fragment>
        
        <div className="col-md-4 lessons">
          <Link to={{
            pathname: '/lessonPlan',
            state: { id: this.props.lesson._id }
          }}>{this.props.lesson.title}</Link>

        </div>
        <div className="col-md-4 lessons">
          <p>{this.props.lesson.project.name}</p>
        </div>
        <div className="col-md-3 lessons">
          <p>{this.props.lesson.project.organization.name}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default LessonPlan;


