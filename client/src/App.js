import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";

function App() {
  
  return (
    <Router>
      <div>   
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
