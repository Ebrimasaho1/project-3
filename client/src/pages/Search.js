import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import api from "../utils/api";
import LessonPlans from "../components/LessonPlans";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
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
   
  }
 //function for search query
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  searchbyTitle = event => {
    event.preventDefault();
    console.log("calling search");
    api.searchLessonPlans(this.state.query).then((results) => {
      console.log("Search results: " + JSON.stringify(results));
      this.setState({
          results : results.data
      });
    });
  }
  // searchOrg = event => {
  //   event.preventDefault();
  //   console.log("calling search");
  //   api.searchPrjects(this.state.query).then((results) => {
  //     console.log("Search results: " + JSON.stringify(results));
  //     this.setState({
  //         results : results.data
  //     });
  //   });
  // }

  render() {
    if (this.state.redirect) {
      console.log('redirecting....');
      return <Redirect to='/' />
    } else {
      return (
        <div className="container">
          <h2>Search lesson plans (enter organization, project or lesson plan title key words)</h2>
          <form onSubmit={this.searchbyTitle}>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <button type="submit" className="btn btn-secondary" >Search</button>
            {/* <p>{this.state.query}</p> */}
          </form>
          {/* Add title header for table */}
          <LessonPlans lessons={this.state.results} />
        </div>
      );
    }
  }
}

export default Search;

