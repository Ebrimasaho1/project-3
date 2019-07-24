import React, { Component } from 'react';

import './form.css';

import api from '../../utils/api';


class Form extends Component {

  constructor(props){
    super(props);
    if(props.lessonId){
      api.getLessonPlans
    }
  }
  state = {
    title: "",
    objective: "",
    overview: "",
    preparation: "",
    agenda: "",
    materials: "",
    description: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ lessonPlan: {
      title: "", 
      objective: "", 
      overview: "", 
      preparation: "", 
      agenda: "", 
      materials: "", 
      description: ""}
     });

    console.log(`
    Lesson Title: ${this.state.title}\n
    Objectice: ${this.state.objective}\n
    Overview: ${this.state.overview}\n
    Preparation: ${this.state.preparation}\n
    Agenda: ${this.state.agenda}\n
    Materials: ${this.state.materials}\n
    Description: ${this.state.description}\n
    `);

    api.saveLessonPlans(this.state.lessonPlan).then((results) => {
      console.log("Lesson Plan Saved");
      
    });
  };

  render() {
    return ( 

    

      <div className="container">
        <h1>
          <label>Title:</label>
          <input type="text" className="form-control" id="title" placeholder="" 
            name="title" value={this.state.title} onChange={this.handleInputChange}></input>
        </h1>
     
         <div className="d-flex justify-content-around">
           <label>Organization</label>
           <select name="orgs" form="organization">
             <option value="boyScouts">Boy Scouts of America</option>
             <option value="rwa">Refugee Womens Alliance</option>
             <option value="seattleFood">Seattle Food Bank</option>
           </select>
           <button type="button" className="btn btn-secondary">
             Add New
           </button>
     
           <label>Projects</label>
           <select name="projs" form="projects">
             <option value="archery">Archery</option>
             <option value="fishing">Fishing</option>
             <option value="camping">Camping</option>
           </select>
           <button type="button" className="btn btn-secondary">
             Add New
           </button>
         </div>
     
         <label>Objective</label>
         <textarea type="text" className="form-control" id="objective" placeholder="" 
            name="objective" value={this.state.objective} onChange={this.handleInputChange}></textarea>
     
         <label>Overview</label>
         <textarea type="text" className="form-control" id="overview" placeholder="" 
          name="overview" value={this.state.overview} onChange={this.handleInputChange}></textarea>
     
         <label>Preparation</label>
         <textarea type="text" className="form-control" id="preparation" placeholder="" 
            name="preparation" value={this.state.preparation} onChange={this.handleInputChange}></textarea>
     
         <label>Agenda</label>
         <textarea type="text" className="form-control" id="agenda" placeholder="" 
            name="agenda" value={this.state.agenda} onChange={this.handleInputChange}></textarea>
     
         <label>Materials</label>
         <textarea type="text" className="form-control" id="materials" placeholder="" 
            name="materials" value={this.state.materials} onChange={this.handleInputChange}></textarea>
     
         <label>Description</label>
         <textarea type="text" className="form-control" id="description" placeholder="" 
            name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>
     
     <div className="d-flex justify-content-around">
           <label>Links</label>
           <input type="text" className="form-control" id="links" placeholder="" 
              dataname="links"></input>
           <button type="button" className="btn btn-secondary">
             Add New
           </button>
     
           <label>Attachments</label>
           <input type="text" className="form-control" id="attach" placeholder="" 
               dataname="attachments"></input>
           <button type="button" className="btn btn-secondary">
             Add New
           </button>
         </div>
     
         <div className="d-flex justify-content-end">
             <button type="submit" id="submit" className="btn btn-primary userSubmit" onClick={this.handleFormSubmit}>Save</button>
           </div>
     
       </div>
     
        );
  }
};

 
export default Form;
