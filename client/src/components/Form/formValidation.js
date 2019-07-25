import React, { Component } from 'react';

function Validate(title, email, objective, overview, preparation, agenda, materials, description){
    const errors = [];
    if (title.length === 0 || email.length || objective.length || overview.length 
        || preparation.length || agenda.length || materials.length || description.length ) {
        errors.push("Title can't be empty");
      }
      return errors;
}

class Validation extends Component {
    constructor() {
        super();
        this.state = {
            errors: []
            // title: '',
            // objective: "",
            // overview: "",
            // preparation: "",
            // agenda: "",
            // materials: "",
            // description: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        // const title = ReactDOM.findDOMNode(this._titleInput).value;
        // const objective = ReactDOM.findDOMNode(this._objInput).value;
        // const overview = ReactDOM.findDOMNode(this._overInput).value;
        // const preparation = ReactDOM.findDOMNode(this._prepInput).value;
        // const agenda = ReactDOM.findDOMNode(this._agendaInput).value;
        // const materials = ReactDOM.findDOMNode(this._matInput).value;
        // const description = ReactDOM.findDOMNode(this._descInput).value;
        const {title, email, objective, overview, preparation, agenda, materials, description};

        const errors = Validate(title, email, objective, overview, preparation, agenda, materials, description);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    }
    
}