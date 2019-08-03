import React, { Component } from "react";
import Form from '../components/Form';
import { Redirect } from 'react-router-dom';

    class LessonForm extends Component {
        constructor(props) {
            super(props);

        var isLoggedIn;
        if (sessionStorage.getItem('currentUserId') == null) {
            isLoggedIn = false;
        } else {
            isLoggedIn = true;
        }

        var id = "";
        if(props.location.state != null){
            id = this.props.location.state.id;
        }

        this.state = {
            redirect: !isLoggedIn,
            lessonId: id
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
                        <Form lessonId={this.state.lessonId} />
                    </div>
                </div>
            );
        }
    }
}

export default LessonForm;