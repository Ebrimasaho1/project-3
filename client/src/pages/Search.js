import React, { Component } from "react";
import { Redirect } from 'react-router-dom';


class Search extends Component {
  constructor(props) {
    super(props);

    if (sessionStorage.getItem('currentUserId') == null) {
      var isLoggedIn = false;
    }else{
      isLoggedIn = true;
    }

    this.state = {
      redirect: !isLoggedIn,
    };

  }

  render() {
    if (this.state.redirect) {
      console.log('redirecting....');
      return <Redirect to='/' />
    } else {
      return (
        <div>
          <h1>Search</h1>
        </div>
      );
    }
  }
}

  export default Search;

