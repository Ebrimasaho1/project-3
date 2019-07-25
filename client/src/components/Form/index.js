import React, { Component } from 'react';
import './form.css'
import api from '../../utils/api'
import Modal from 'react-modal';
import Select from 'react-select';

//FORM VALIDATION
function Validate(title, email, objective, overview, preparation, agenda, materials, description){
  const errors = [];
  if (title.length === 0 || email.length || objective.length || overview.length 
      || preparation.length || agenda.length || materials.length || description.length ) {
      errors.push("Title can't be empty");
    }
    return errors;
}

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

      selectedOrganization: "",
      selectedProject:"",
      modalIsOpen: false,
      lessonId: props.lessonId,
      organizationOpts: [],
      projsOptions: [],
      errors: []

    };

    this.handleSelectInputChange = this.handleSelectInputChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addOrganization = this.addOrganization.bind(this);

  }

  componentDidMount() {
    
    //populate organization combo box with all orgs from db
    api.getOrganizations().then((result) => {
      var orgsFromDB = result.data;
      var orgsOptions = [];
      console.log("Organizations from db: " + JSON.stringify(result.data));
      for (var i = 0; i < orgsFromDB.length; i++) {
        console.log("Value " + i + " id =" + orgsFromDB[i]._id + " value = " + orgsFromDB[i].name);
        orgsOptions[i] = { value: orgsFromDB[i]._id, label: orgsFromDB[i].name };
        this.state.organizationOpts.push(orgsOptions[i]);
      }

      this.setState(
        this.state
      );
      console.log("orgsOptions = " + JSON.stringify(this.state.organizationOpts));
    });

    //populate lessonplan data with existing lesson plan (coming from dashboard click - not working)
    console.log("Lesson id in form:" + this.state.lessonId);
    if (this.state.lessonId && this.state.lessonId !== "") {
      api.getLessonPlan(this.state.lessonId).then((result) => {
        console.log("Title from database:" + result.data.title);
        this.setState( {
          title: result.data.title,
          objective: result.data.objective,
          overview: result.data.overview,
          preparation: result.data.preparation,
          agenda: result.data.agenda,
          materials: result.data.materials,
          description: result.data.description, 
          selectedProject: result.data.project
        });
      });
    }

  }

  handleSelectInputChange = selectedOption => {
    //this setState is not working
    console.log("Selected option value = " + selectedOption.value);
    this.setState({ selectedOrganization : selectedOption.value});
    console.log("Option selected:" + this.state.selectedOrganization);
    //populate the projects from db
    api.getOrganizationWithProjects(selectedOption.value).then((org) => {
      console.log(JSON.stringify(org.data));
      var projects = org.data.projects;
      var projsOptions = [];
      for (var i = 0; i < projects.length; i++) {
        console.log("Value " + i + " id =" + projects[i]._id + " value = " + projects[i].name);
        projsOptions[i] = { value: projects[i]._id, label: projects[i].name };
        this.state.projsOptions.push(projsOptions[i]);
      }

      this.setState(
        this.state
      );

      console.log("Project options in state: " + JSON.stringify(this.state.projsOptions));
    });
  };

  handleProjectSelectInputChange = selectedOption => {
    this.setState({ selectedProject : selectedOption.value});
    console.log(`Option selected:`, this.state.selectedProject);
  };

  openModal = () => {
    //console.log("this in open modal:" + JSON.stringify(this));
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  addOrganization = event => {
    event.preventDefault();
    const { value } = event.target;
    console.log('called add organization with value: ' + event.target);
    //save new organization to database
    api.saveOrganization(value).then((result)=>{
      console.log(value);
    });

    //get organizations from DB again?
    // this.state.organizationOpts.push(value);
    // this.setState({
    //   // organization: value,
    //   organizations: this.state.organizationOpts
    // })
  }


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
            //value={this.state.selectedOrganization}
            onChange={this.handleSelectInputChange}
            options={this.state.organizationOpts}
          />
          <button type="button" className="btn btn-secondary" id="addNew" onClick={this.openModal}>
            Add New
           </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>Add an organization or project</div>
            <form>
              <input name="organizationInput" />
              <button onClick=  {this.addOrganization}>Submit</button>
            </form>
          </Modal>

          <label>Projects</label>
          <Select className="proj-select" name="proj" form="projects" type="list"
            value={this.state.selectedProject}
            onChange={this.handleProjectSelectInputChange}
            options={this.state.projsOptions}
          />
          <button type="button" className="btn btn-secondary" id="addNew" onClick={this.openModal}>
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
          <button type="submit" id="submit" className="btn btn-primary userSubmit" onClick={this.handleFormSubmit}>Save</button>
        </div>

      </div>

    );
  }
};


export default Form;

// $("#submit").on("click", function (event) {
//   event.preventDefault();
//   console.log(event);

//   // Form validation
//   function validateForm() {
//     var isValid = true;
//     var errorMessage = "";
//     $("#lessonTitle").each(function () {
//       if ($(this).val() === "") {
//         $(this).addClass("invalid");
//         isValid = false;
//         errorMessage += "Lesson Title \n";
//       } else {
//         $(this).removeClass("invalid");
//         $(this).addClass("valid");
//       }
//     });
//     $("#objective").each(function () {
//       if ($(this).val() === "") {
//         $(this).addClass("invalid");
//         isValid = false;
//         errorMessage += "Objective \n";
//       } else {
//         $(this).removeClass("invalid");
//         $(this).addClass("valid");
//       }
//     });
//     $("#overview").each(function () {
//       if ($(this).val() === "") {
//         $(this).addClass("invalid");
//         isValid = false;
//         errorMessage += "Overview \n";
//       } else {
//         $(this).removeClass("invalid");
//         $(this).addClass("valid");
//       }
//     });
//     $("#preparation").each(function () {
//       if ($(this).val() === "") {
//         $(this).addClass("invalid");
//         isValid = false;
//         errorMessage += "Preparation \n";
//       } else {
//         $(this).removeClass("invalid");
//         $(this).addClass("valid");
//       }
//     });
//     $("#agenda").each(function () {
//       if ($(this).val() === "") {
//         $(this).addClass("invalid");
//         isValid = false;
//         errorMessage += "Agenda \n";
//       } else {
//         $(this).removeClass("invalid");
//         $(this).addClass("valid");
//       }
//     });
//     $("#materials").each(function () {
//       if ($(this).val() === "") {
//         $(this).addClass("invalid");
//         isValid = false;
//         errorMessage += "Materials \n";
//       } else {
//         $(this).removeClass("invalid");
//         $(this).addClass("valid");
//       }
//     });
//     $("#description").each(function () {
//       if ($(this).val() === "") {
//         $(this).addClass("invalid");
//         isValid = false;
//         errorMessage += "Description \n";
//       } else {
//         $(this).removeClass("invalid");
//         $(this).addClass("valid");
//       }
//     });

//     if (errorMessage !== "") {
//       alert("Please complete the following fields:" + errorMessage);
//     } else {
//       return isValid;
//     }

//   }

//  if (validateForm()) {
//   var lessonTitle = $("#lessonTitle")
//     .val()
//     .trim();
//   var objective = $("#objective")
//     .val()
//     .trim();
//   var overview = $("#overview")
//     .val()
//     .trim();
//   var preparation = $("#preparation")
//     .val()
//     .trim();
//   var agenda = $("#agenda")
//     .val()
//     .trim();
//   var materials = $("#materials")
//     .val()
//     .trim();
//   var description = $("#description")
//     .val()
//     .trim();


// };
// });
