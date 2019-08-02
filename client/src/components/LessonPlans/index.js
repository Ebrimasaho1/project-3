
import LessonPlan from "../LessonPlan";

import React from 'react';
class LessonPlans extends React.Component {

  render() {
    if (this.props.lessons) {
      return (

        this.props.lessons.map(lesson => (
          <div className="row" key={lesson._id}>
            <LessonPlan lesson={lesson} />
          </div>
      ))
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default LessonPlans;
