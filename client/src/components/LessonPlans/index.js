
import LessonPlan from "../LessonPlan";


import React from 'react';
class LessonPlans extends React.Component {

  render() {
    if (this.props.lessons) {
      return (
        this.props.lessons.map(lesson => (
          <tr key={lesson._id}>
            <LessonPlan lesson={lesson} />    
          </tr>     
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
