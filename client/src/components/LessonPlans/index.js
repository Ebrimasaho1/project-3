
import LessonPlan from "../LessonPlan";
import TableHeader from '../TableHeader';

import React from 'react';
class LessonPlans extends React.Component {

  render() {
    if (this.props.lessons) {
      return (

        this.props.lessons.map(lesson => (

          <div className="row" key={lesson._id}>
            <table className="table">
              <thead>
                <tr>
                  <TableHeader />
                </tr>
              </thead>
              <tbody>              
                  <LessonPlan lesson={lesson} />        
              </tbody>
            </table>

          </div>
        ))
      );
    } else {
      return (
        <div><h4>No lesson plans...</h4></div>
      );
    }
  }
}

export default LessonPlans;
