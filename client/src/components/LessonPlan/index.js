import React from 'react';
import { Link } from 'react-router-dom';
import './lessonplan.css';

class LessonPlan extends React.Component {

  render() {
    return (
      <React.Fragment>

        {/* <div className="col-md-4 lessons">
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
        </div> */}

        <div className="col-md-11 lessons">
          <table class="table">
            {/* <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                {/* <th scope="row">1</th> */}
                <td><Link to={{
                  pathname: '/lessonPlan',
                  state: { id: this.props.lesson._id }
                }}>{this.props.lesson.title}</Link></td>
                <td><p>{this.props.lesson.project.name}</p></td>
                <td><p>{this.props.lesson.project.organization.name}</p></td>
              </tr>
            </tbody>
          </table>
        </div>


      </React.Fragment>
    );
  }
}

export default LessonPlan;


