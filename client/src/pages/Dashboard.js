import React, { Component } from "react";
<<<<<<< HEAD
class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
           name:'',
           redirect: false,
       };
    }
    
    componentDidMount() {
         let data = JSON.parse(sessionStorage.getItem('userData'));
         console.log(data);
         this.setState({name: data.userData.name})
    }
    
=======

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
>>>>>>> 67ca6eade925636308a6f35cacfdbde138ea837c
  render(){
      return(
        <div className="container-fluid">
            <div className="row">
                <DashContent />
                {/* <h1>poop</h1> */}
            </div>
        </div>
       ); 
    }
}

export default Dashboard;




































