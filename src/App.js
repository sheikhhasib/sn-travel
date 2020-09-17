import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import LoginHeader from './components/loginHeader/LoginHeader';
import Login from './components/Login/Login';
import FbAndGmailSignIn from './components/Login/FbAndGmailSignIn';
import Register from './components/Register/Register';
import NotFound from './components/notFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [city,setCity] = useState();

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader></LoginHeader>
            <Login></Login>
            <FbAndGmailSignIn></FbAndGmailSignIn>
          </Route>
          <Route path="/register">
            <LoginHeader></LoginHeader>
            <Register></Register>
            <FbAndGmailSignIn></FbAndGmailSignIn>
          </Route>
          <PrivateRoute path="/destination">
            <Destination city={city}></Destination>
          </PrivateRoute>
          <Route exact path="/">
            <Header></Header>
            <Home setCity={setCity}></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
