import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddServices from './Components/AddServices/AddServices';
import AddTechinicians from './Components/AddTechnicians/AddTechnicians';
import ManageServices from './Components/ManageService/ManageService';
import Login from './Components/Login/Login';
import AddReview from './Components/AddReview/AddReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/addTechnicians">
            <AddTechinicians></AddTechinicians>
          </Route>
          <Route exact path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          {/* <Route path="/appointment">
           
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          
         */}

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
