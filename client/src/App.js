import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import Form from "./components/Form";

function App() {
<<<<<<< HEAD
  //NEW CODE STARTS
  // state={
  //   loggedIn: false
  // }
  //NEW CODE ENDS
=======
>>>>>>> 5ddb91c2be70c9a94fcff4eec8929a25f9c0d068

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//render={() => <Login user={this.props}/>  for rerouting