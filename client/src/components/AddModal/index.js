import React, { Component } from 'react';
//import "./addmodal.css";
import Modal from 'react-modal';
  import api from '../../utils/api'

class AddModal extends Component {

  constructor(props) {
    super(props);
    this.state = {

      newOrgProject: "",
    }

    Modal.setAppElement(document.getElementById('root'));
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addOrganization = this.addOrganization.bind(this);
  }


  closeModal = () => {
    this.props.closeModal();
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  addOrganization = event => {
    event.preventDefault();
    console.log("Called add: " + this.props.addOperation);

    if (this.props.addOperation === "Organization") {
      //save new organization to database
      var orgObj = {
        name: this.state.newOrgProject,
        projects: []
      };

      api.saveOrganization(orgObj).then((result) => {
        console.log(result);
        //call function to update select options with new organization
        this.props.setSelectedOrganization(result.name, result._id);
      });
    } else {
      console.log("Selected Organization inside modal: " + this.props.selectedOrganization);
      if (this.props.selectedOrganization !== "") {
        var projObj = {
          name: this.state.newOrgProject,
          organization: this.props.selectedOrganization,
          lessonPlans: []
        }
        api.saveProject(projObj).then((result) => {
          console.log(result);
          //call function to update project options in select with new project
          this.props.setSelectedProject(result.name, result._id);
        });
      }
    }
    
    this.closeModal();
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={subtitle => this.subtitle = subtitle}>Add {this.props.addOperation}</h2>
        <button id="closeBtn" onClick={this.closeModal} style={{ color: 'white' }}>close</button>
        <div> Name:</div>
        <form onSubmit={this.addOrganization}>
          <input name="newOrgProject" value={this.state.newOrgProject} onChange={this.handleInputChange} />
          <button type="submit" style={{ color: 'white' }}>Submit</button>
        </form>
      </Modal>
    );
  }
}

export default AddModal;