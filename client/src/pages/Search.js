import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import api from "../utils/api";
import LessonPlans from "../components/LessonPlans";
import "./search.css";
import TableHeader from '../components/TableHeader';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWords: '',
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

  // searchbyTitle = () => {
  //   event.preventDefault();
  //   console.log("calling search title query: " + this.state.keyWords);
  //   api.searchLessonPlans(this.state.keyWords).then((results) => {
  //     //console.log("Search results: " + JSON.stringify(results));
  //     this.setState({
  //       results: results.data,
  //       title: ""
  //     });
  //   });
  // }

  // searchByProject = () => {
  //   event.preventDefault();

  //   console.log("calling project search: " + this.state.project);
  //   api.searchLessonsByProjectName(this.state.project).then((results) => {
  //     var resLessonPlans = [];
  //     results.data.forEach(project => {
  //       resLessonPlans = resLessonPlans.concat(project.lessonPlans);
  //       // console.log(project.lessonPlans);
  //     });
  //     //console.log("result lesson plans for proj search: "+ JSON.stringify(resLessonPlans));

  //     this.setState({
  //       results: resLessonPlans,
  //       project: ""
  //     });
  //   });
  // }

  // searchByOrganization = () => {
  //   event.preventDefault();
  //   console.log("calling search by organization: " + this.state.organization);
  //   api.searchLessonsByOrganizationName(this.state.organization).then((results) => {
  //     //console.log("Search results: " + JSON.stringify(results.data));
  //     var resLessonPlans = [];
  //     results.data.forEach(organization => {
  //       organization.projects.forEach(project => {
  //         resLessonPlans = resLessonPlans.concat(project.lessonPlans);
  //       });
  //     });
  //     this.setState({
  //       results: resLessonPlans,
  //       organization: ""
  //     });
  //   });
  // }

  search = (event) => {
    event.preventDefault();

    Promise.all([
      api.searchLessonPlansByTitle(this.state.keyWords),
      api.searchLessonsByOrganizationName(this.state.keyWords),
      api.searchLessonsByProjectName(this.state.keyWords)
    ]).then(([titleResults, organizatioResults, projectResults]) => {
      // console.log("Title results: " + JSON.stringify(titleResults.data));
      // console.log("Project resutls: " + JSON.stringify(projectResults.data));
      // console.log("Organization results" + JSON.stringify(organizatioResults.data));
      var resLessonPlans = titleResults.data;
      organizatioResults.data.forEach(organization => {
        organization.projects.forEach(project => {
          resLessonPlans = resLessonPlans.concat(project.lessonPlans);
        });
      });

      projectResults.data.forEach(project => {
        resLessonPlans = resLessonPlans.concat(project.lessonPlans);
        // console.log(project.lessonPlans);
      });

      this.setState({
        results: resLessonPlans,
        keyWords: ""
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
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={this.search}>
                <input
                  className="searchInput"
                  placeholder="Search for..."
                  name="keyWords"
                  id="test"
                  value={this.state.keyWords}
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="btn btn-secondary">Search</button>
                {/* <p>{this.state.query}</p> */}
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <TableHeader />
                  </tr>
                </thead>
                <tbody>
                  <LessonPlans lessons={this.state.results} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Search;

