import React from 'react';
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


function App() {
  return (
    <Router>
    <div>
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
        <Route  path="/news">

        </Route>
        <Route exact path="/">
          <Header></Header>
          <Home></Home>
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
