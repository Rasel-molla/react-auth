
import './App.css';
import React, { createContext,useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Navbar from './components/Navbar/Navbaar';

export const userContext = createContext();


function App() {
 
  //User 
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Navbar></Navbar>
     
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
   
 
          <Route path="/destination/:id">
           <Destination></Destination>
          </Route>
       
          <Route path="/login">
           <Login></Login>
          </Route>
        
        </Switch>
      </Router>
    </userContext.Provider>



  );
}

export default App;
