import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./Components/AppointmentPage/Appointment/Appointment";
import Home from "./Components/HomePage/Home/Home";
import LogIn from "./Components/LogInPage/LogIn/LogIn";
import Dashboard from './Components/DashboardPage/Dashboard/Dashboard';
import AllPatients from './Components/AllPatientsPage/AllPatients';
import AddDoctor from './Components/AddDoctor/AddDoctor';
import PrivateRoute from './Components/LogInPage/PrivateRoute/PrivateRoute';
import './App.css';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/allPatient">
            <AllPatients />
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
