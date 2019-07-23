import React, { Component } from "react";
import DashContent from '../components/DashContent';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        if (sessionStorage.getItem('currentUserId') == null) {
            var isLoggedIn = false;
        }else{
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
        }else{
            return(
                <div className="container-fluid">
                    <div className="row">
                        <DashContent />
                    </div>
                </div>
            );
        }
    }
}

export default Dashboard;




































