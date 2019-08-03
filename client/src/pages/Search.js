import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import api from "../utils/api";
import LessonPlans from "../components/LessonPlans";
import "./search.css";
import TableHeader from '../../src/components/TableHeader';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      project: '',
      organization: '',
      results: []
    }

    if (sessionStorage.getItem('currentUserId') == null) {
      var isLoggedIn = false;
    } else {
      isLoggedIn = true;
    }

    this.state = {
      redirect: !isLoggedIn,
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchbyTitle = event => {
    event.preventDefault();
    console.log("calling search title query: " + this.state.title);
    api.searchLessonPlans(this.state.title).then((results) => {
      //console.log("Search results: " + JSON.stringify(results));
      this.setState({
        results: results.data,
        title: ""
      });
    });
  }

  searchByProject = event => {
    event.preventDefault();

    console.log("calling project search: " + this.state.project);
    api.searchLessonsByProjectName(this.state.project).then((results) => {
      var resLessonPlans = [];
      results.data.forEach(project => {
        resLessonPlans = resLessonPlans.concat(project.lessonPlans);
        // console.log(project.lessonPlans);
      });
      //console.log("result lesson plans for proj search: "+ JSON.stringify(resLessonPlans));

      this.setState({
        results: resLessonPlans,
        project: ""
      });
    });
  }

  searchByOrganization = event => {
    event.preventDefault();
    console.log("calling search by organization: " + this.state.organization);
    api.searchLessonsByOrganizationName(this.state.organization).then((results) => {
      //console.log("Search results: " + JSON.stringify(results.data));
      var resLessonPlans = [];
      results.data.forEach(organization => {
        organization.projects.forEach(project => {
          resLessonPlans = resLessonPlans.concat(project.lessonPlans);
        });
      });
      this.setState({
        results: resLessonPlans,
        organization: ""
      });
    });
  }

  render() {
    if (this.state.redirect) {
      console.log('redirecting....');
      return <Redirect to='/' />
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1>Search lesson plans </h1>
            </div>
          </div>
          <div className="row header">
            <div className="col-md-4">
              <h3> Title:</h3>
              <form onSubmit={this.searchbyTitle}>
                <input
                  className="searchInput"
                  placeholder="Search for..."
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="btn btn-secondary" >Search</button>
                {/* <p>{this.state.query}</p> */}
              </form>
            </div>
            <div className="col-md-4">
              <h3>Project:</h3>
              <form onSubmit={this.searchByProject}>
                <input
                  className="searchInput"
                  placeholder="Search for..."
                  name="project"
                  value={this.state.project}
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="btn btn-secondary" >Search</button>
                {/* <p>{this.state.query}</p> */}
              </form>
            </div>
            <div className="col-md-4">
              <h3>Organization:</h3>
              <form onSubmit={this.searchByOrganization}>
                <input
                  className="searchInput"
                  placeholder="Search for..."
                  name="organization"
                  value={this.state.organization}
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="btn btn-secondary" >Search</button>
                {/* <p>{this.state.query}</p> */}
              </form>
            </div>
          </div>
          <LessonPlans lessons={this.state.results} />
        </div>
      );
    }
  }
}

export default Search;

