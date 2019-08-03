
import React from 'react';
import { Link } from 'react-router-dom';

class LessonPlan extends React.Component {

  render() {
    return (
      <React.Fragment>
        <td >
          <Link to={{
            pathname: '/lessonPlan',
            state: { id: this.props.lesson._id }
          }}>{this.props.lesson.title}</Link>

        </td>
        <td >
          <p>{this.props.lesson.project.name}</p>
        </td>
        <td>
          <p>{this.props.lesson.project.organization.name}</p>
        </td>
      </React.Fragment>
    );
  }
}

export default LessonPlan;


