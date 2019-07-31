import React, { Component } from 'react';
import './form.css'
import api from '../../utils/api'

import Select from 'react-select';
import AddModal from "../AddModal";

//FORM VALIDATION
// function Validate(title, email, objective, overview, preparation, agenda, materials, description){
//   const errors = [];
//   if (title.length === 0 || email.length || objective.length || overview.length 
//       || preparation.length || agenda.length || materials.length || description.length ) {
//       errors.push("Title can't be empty");
//     }
//     return errors;
// }

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      objective: "",
      overview: "",
      preparation: "",
      agenda: "",
      materials: "",
      description: "",
      organization: "",

      lessonId: props.lessonId,
      errors: [],

      isModalOpen: false,
      addOperation: "",

      selectedOrganization: "",
      selectedProject: "",
      organizationOpts: [],
      projsOptions: []

    };

    this.openModal = this.openModal.bind(this);
    this.handleSelectOrganizationInputChange = this.handleSelectOrganizationInputChange.bind(this);
  }


  forbidSave() {
    return (this.state.title !== "" && this.state.selectedOrganization !== "" && this.state.selectedProject !== "") ? false : true;
  }

  forbidAddProject(){
    return (this.state.selectedOrganization === "");
  }

  loadOrganizations() {
    //populate organization combo box with all orgs from db
    api.getOrganizations().then((result) => {
      var orgsFromDB = result.data;
      var orgsOptions = [];
      console.log("Organizations from db: " + JSON.stringify(result.data));
      for (var i = 0; i < orgsFromDB.length; i++) {
        console.log("Value " + i + " id =" + orgsFromDB[i]._id + " value = " + orgsFromDB[i].name);
        orgsOptions[i] = { value: orgsFromDB[i]._id, label: orgsFromDB[i].name };
        this.state.organizationOpts.push(orgsOptions[i]);
      };

      this.setState(
        this.state
      );
      //console.log("orgsOptions = " + JSON.stringify(this.state.organizationOpts));
    });
  }

    // loadProjects() {
    //   api.getProjects().then((result) => {
    //     var projsFromDB = result.data;
    //     var projsOptions = [];
    //     console.log("Projects within an Organization: " + JSON.stringify(result.data));
    //     for (var i = 0; i < projsFromDB.length; i++) {
    //       console.log("Value " + i + " id =" + projsFromDB[i]._id + " value = " + projsFromDB[i].name);
    //       projsOptions[i] = { value: projsFromDB[i]._id, label: projsFromDB[i].name };
    //       this.state.projsOptions.push(projsOptions[i]);
    //     }
    //     this.setState(
    //       this.state
    //     );
    //     console.log("orgsOptions = " + JSON.stringify(this.state.projsOptions));
    //   });
    // }

  loadLessonPlan() {
    //populate lessonplan data with existing lesson plan (coming from dashboard click)
    console.log("Lesson id in form:" + this.state.lessonId);
    if (this.state.lessonId && this.state.lessonId !== "") {
      api.getLessonPlan(this.state.lessonId).then((result) => {
        console.log("Title from database:" + result.data.title);
        this.setState({
          title: result.data.title,
          objective: result.data.objective,
          overview: result.data.overview,
          preparation: result.data.preparation,
          agenda: result.data.agenda,
          materials: result.data.materials,
          description: result.data.description,
          selectedProject: result.data.project,
          selectedOrganization: result.data.organization
        });
      });
    }
  }

  componentDidMount() {
    this.loadLessonPlan();
    this.loadOrganizations();
    if (this.state.selectedOrganization) {
      this.populateProjectsForSelectedOrg(this.state.selectedOrganization);
    }
    var disableSave = this.forbidSave();
    this.setState({ disableSave });
  }

  populateProjectsForSelectedOrg(orgId) {
    //populate the projects from db
    var projsOptions = [];
    api.getOrganizationWithProjects(orgId).then((org) => {
      console.log(JSON.stringify(org.data));
      var projects = org.data.projects;
      if (projects) {
        for (var i = 0; i < projects.length; i++) {
          console.log("Value " + i + " id =" + projects[i]._id + " value = " + projects[i].name);
          projsOptions[i] = { value: projects[i]._id, label: projects[i].name };
          this.state.projsOptions.push(projsOptions[i]);
        }
      }
      this.setState({
        projsOptions: projsOptions
      });
    });
  }

  handleSelectOrganizationInputChange = selectedOption => {

    console.log("Selected organization = " + selectedOption.value);
    var orgId = selectedOption.value;
    this.setState({ selectedOrganization: orgId });
    //console.log("Option selected:" + this.state.selectedOrganization);
    this.populateProjectsForSelectedOrg(orgId);
  };

  handleSelectProjectInputChange = selectedOption => {
    this.setState({
      selectedProject: selectedOption.value,
    });
  };

  updateOrgOptions = (name, id) => {
    console.log('did updateorgoptions run?');

    //function to update select options -- not functional -- add blank org
    const newOrg = { value: id, label: name };
    //console.log(newOrg);

    const newOrgOpts = this.state.organizationOpts;

    newOrgOpts.push(newOrg);

    this.setState({
      organizationOpts: newOrgOpts,
      selectedOrganization: id,
      selectedOrg: newOrg
    });

  }

  setSelectedProject = (name, id) => {
    //function to update the project options in select -- not functional
    var newProj = { value: id, label: name };
    this.state.projsOptions.push(newProj);

    this.setState({
      projsOptions: this.state.projsOptions,
      selectedProject: id,
      selectedProj: newProj
    });
    this.setState(
      this.state
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    console.log(`
    Lesson Title: ${this.state.title}\n
    Objectice: ${this.state.objective}\n
    Overview: ${this.state.overview}\n
    Preparation: ${this.state.preparation}\n
    Agenda: ${this.state.agenda}\n
    Materials: ${this.state.materials}\n
    Description: ${this.state.description}\n
    Project: ${this.state.selectedProject}
    `);

    var userId = sessionStorage.getItem("currentUserId");

    var lessonPlan = {
      title: this.state.title,
      objective: this.state.objective,
      overview: this.state.overview,
      preparation: this.state.preparation,
      agenda: this.state.agenda,
      materials: this.state.materials,
      description: this.state.description,
      project: this.state.selectedProject,
      user: userId
    };

    // function validate(lessonTitle) {
    //   const errors = [];

    //   if (lessonTitle.length === 0) {
    //     errors.push("Lesson Title can't be empty");
    //   }
    //   return errors;
    // }

    //call api.saveLessonPlan(lessonPlan).then...
    api.saveLessonPlan(lessonPlan).then((result) => {
      console.log("Lesson Plan saved");
    });
  };



  openModal = (operation) => {
    //console.log("operation in open modal:" + operation);
    this.setState({
      isModalOpen: true,
      addOperation: operation
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    // const { selectedOption } = ;
    return (
      <div className="container">
        <h1>
          <label>Title:</label>
          <input type="text" className="form-control" id="title" placeholder=""
            name="title" value={this.state.title} onChange={this.handleInputChange}></input>
        </h1>

        <div className="d-flex justify-content-around">
          <label>Organization</label>
          <Select className="org-select" name="orgs" form="organization" type="list"
            onChange={this.handleSelectOrganizationInputChange}
            options={this.state.organizationOpts}
          />
          <button type="button" className="btn btn-secondary" id="addNew" onClick={() => { this.openModal("Organization") }}>
            Add New
           </button>
          <AddModal selectedOrganization={this.state.selectedOrganization} addOperation={this.state.addOperation} isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}
            setSelectedOrganization={this.updateOrgOptions} setSelectedProject={this.setSelectedProject} />

          <label>Projects</label>
          <Select className="proj-select" name="proj" form="projects" type="list"
            onChange={this.handleSelectProjectInputChange}
            options={this.state.projsOptions}
          />
          <button type="button" className="btn btn-secondary" id="addNew" disabled={this.forbidAddProject()} onClick={() => { this.openModal("Project") }}>
            Add New
           </button>
        </div>

        <label>Objective</label>
        <textarea type="text" className="form-control" id="objective" placeholder=""
          name="objective" value={this.state.objective} onChange={this.handleInputChange}></textarea>

        <label>Overview</label>
        <textarea type="text" className="form-control" id="overview" placeholder=""
          name="overview" value={this.state.overview} onChange={this.handleInputChange}></textarea>

        {/* <label>Preparation</label>
        <textarea type="text" className="form-control" id="preparation" placeholder=""
          name="preparation" value={this.state.preparation} onChange={this.handleInputChange}></textarea> */}

        <label>Agenda</label>
        <textarea type="text" className="form-control" id="agenda" placeholder=""
          name="agenda" value={this.state.agenda} onChange={this.handleInputChange}></textarea>

        <label>Materials</label>
        <textarea type="text" className="form-control" id="materials" placeholder=""
          name="materials" value={this.state.materials} onChange={this.handleInputChange}></textarea>

        <label>Description</label>
        <textarea type="text" className="form-control" id="description" placeholder=""
          name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>

        {/* <div className="d-flex justify-content-around">
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
        </div> */}

        <div className="d-flex justify-content-end">
          <button type="submit" id="submit" className="btn btn-primary userSubmit" onClick={this.handleFormSubmit} disabled={this.forbidSave()}>Save</button>
        </div>

      </div>

    );
  }
};


export default Form;