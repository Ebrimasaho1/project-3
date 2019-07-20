import React, { Component } from "react";
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
    
  render(){
      return(
    <div>
      <h1>DashBoard</h1>
      </div>
       ) }
}

export default Dashboard;




































