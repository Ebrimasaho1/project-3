import React, { Component } from "react";

import DashContent from '../components/DashContent';


class Dashboard extends Component {

    // constructor(props){
    //     super(props)(
    //         this.state={
    //             name:'',
    //             email:''
    //         }
    //     )
    // }
  render(){
      return(
        <div className="container-fluid">
            <div className="row">
                <DashContent />
            </div>
        </div>
       ); 
    }
}

export default Dashboard;




































