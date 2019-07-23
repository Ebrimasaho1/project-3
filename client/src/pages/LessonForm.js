import React, { Component } from "react";
import Form from '../components/Form';
import { Redirect } from 'react-router-dom';

class LessonForm extends Component {
    constructor(props) {
        super(props);

        if (sessionStorage.getItem('currentUserId') == null) {
            var isLoggedIn = false;
        } else {
            isLoggedIn = true;
        }

        this.state = {
            redirect: !isLoggedIn,
        };
    }

    render() {
        if (this.state.redirect) {
            console.log('redirecting....');
            return <Redirect to='/' />
        } else {
            return (
                <div className="container-fluid">
                    <div className="row">
                        {/* This was causing the code to break */}
                        <Form lessonId={this.props.location.state.id} />
                    </div>
                </div>
            );
        }
    }
}

export default LessonForm;