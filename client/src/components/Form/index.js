import React, { Component } from 'react';
import './form.css'
import '../../utils/api'
import api from '../../utils/api';


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

        lessonId: props.lessonId
      };
    
  }

  componentDidMount(){
    console.log("Lesson id in form:" + this.state.lessonId);
    if (this.state.lessonId) {
      api.getLessonPlan(this.state.lessonId).then((result) => {
        console.log(result);
        this.setState = {
          title: result.data.title,
          objective: result.data.objective,
          overview: result.data.overview,
          preparation: result.data.preparation,
          agenda: result.data.agenda,
          materials: result.data.materials,
          description: result.data.description
        };
      });
    }
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
    `);

    // function validate(lessonTitle) {
    //   const errors = [];

    //   if (lessonTitle.length === 0) {
    //     errors.push("Lesson Title can't be empty");
    //   }
    //   return errors;
    // }

    //call api.saveLessonPlan(lessonPlan).then...
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
