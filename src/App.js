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

import PaymentProcess from './Components/PaymentProcess/PaymentProcess';
import UserOrder from './Components/UserOrder/UserOrder';
import AdminOrderList from './Components/AdminOrderList/AdminOrderList';
import Review from './Components/Review/Review';
import Admin from './Components/Admin/Admin';

import AllServices from './Components/AllServices/AllServices';
import About from './Components/About/About';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const ProductContext = createContext();
export const TechnicianContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [product, setProduct] = useState({});
  const [isTechnician, setIsTechnician] = useState(null);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ProductContext.Provider value={[product, setProduct]}>
        <TechnicianContext.Provider value={[isTechnician, setIsTechnician]}>


          <Router>
            <Switch>
              
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/allservices">
                <AllServices></AllServices>
              </Route>

              <PrivateRoute exact path="/addServices">
                <AddServices></AddServices>
              </PrivateRoute>
              <Route exact path="/review">
                <Review></Review>
              </Route>
              <PrivateRoute exact path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <PrivateRoute exact path="/addTechnicians">
                <AddTechinicians></AddTechinicians>
              </PrivateRoute>
              <PrivateRoute exact path="/manageServices">
                <ManageServices></ManageServices>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute exact path="/addReview">
                <AddReview></AddReview>
              </PrivateRoute>
         
              <PrivateRoute path="/userOrderList">
                <UserOrder></UserOrder>
              </PrivateRoute>
              <PrivateRoute path="/book">
                <PaymentProcess></PaymentProcess>
              </PrivateRoute>
              <PrivateRoute exact path="/adminOrders">
                <AdminOrderList></AdminOrderList>
              </PrivateRoute>
              
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
        </TechnicianContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
