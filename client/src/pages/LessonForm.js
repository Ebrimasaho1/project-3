import React, { Component } from "react";

import Form from '../components/Form';


class LessonForm extends Component {

  render(){
      return(
        <div className="container-fluid">
            <div className="row">
                <Form />
            </div>
        </div>
       ); 
    }
}

export default LessonForm;