import React, { Component } from "react";
import { Redirect } from 'react-router-dom';


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

  render() {
    if (this.state.redirect) {
      console.log('redirecting....');
      return <Redirect to='/' />
    } else {
      return (
        <div className="container">
          <h1>Search organizations and projects</h1>
          <form>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
          </form>
        </div>
      );
    }
  }
}

export default Search;

