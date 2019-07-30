import React, { Component } from 'react';

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;


  //validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
}

class Validation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      objective: null,
      overview: null,
      preparation: null,
      agenda: null,
      materials: null,
      description: null,
      formErrors: {
        title: "",
        objective: "",
        overview: "",
        preparation: "",
        agenda: "",
        materials: "",
        description: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      --SUBMITTING--
        title: ${this.state.title},
        objective: ${this.state.objective},
        overview: ${this.state.overview},
        preparation: ${this.state.preparation},
        agenda: ${this.state.agenda},
        materials: ${this.state.materials},
        description: ${this.state.description}
      `);
    } else {
      console.log("FORM INVALID");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "title":
        formErrors.title =
          value.length < 1 ? "Please complete field" : "";
        break;
      case "objective":
        formErrors.objective =
          value.length < 1 ? "Please complete field" : "";
        break;
      case "overview":
        formErrors.overview =
          value.length < 1 ? "Please complete field" : "";
        break;
      case "preparation":
        formErrors.preparation =
          value.length < 1 ? "Please complete field" : "";
        break;
      case "agenda":
        formErrors.agenda =
          value.length < 1 ? "Please complete field" : "";
        break;
      case "materials":
        formErrors.materials =
          value.length < 1 ? "Please complete field" : "";
        break;
      case "description":
        formErrors.description =
          value.length < 1 ? "Please complete field" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
}

export default Validation;