import React, { useState, useEffect, Component } from 'react';
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';


import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import {getToken, removeUserSession, setUserSession } from './Utils/Common';


/*class App extends Component {
  debugger;
  componentDidMount() {
      fetch('https://vapi.vetroms.co.za/api/user/me?api_token={PFeTyvkADcrAKyqow0zPLM3mExNRapf3}', {email : 'noreply@vetro.co.za', password : 'Password@123'})
      .then(res => res.json())
      .then((data) => {
        this.setState({ Client: data })
      })
      .catch(console.log)
    
    debugger;
  }*/


function App() {

   const[authLoading, setAuthLoading] = useState(true);
   

   useEffect (() => {
     const token = getToken();
     if(!token){
       return;
     }

     axios.get('https://vapi.vetroms.co.za/api/user/me?api_token={PFeTyvkADcrAKyqow0zPLM3mExNRapf3}').then(response => {
       setUserSession(response.data.token, response.data.user);
       setAuthLoading(false);
     }).catch(error => {
       removeUserSession();
       setAuthLoading(false);
     });
   },[]);

   if(authLoading && getToken()){
     return <div className="content">Checking Authentication...</div>
   }

//render() {
  return (
    <div className="App">
     <BrowserRouter>
     <div>
       <div className="header">
         <NavLink exact activeClassName="active" to="/">Home</NavLink>
         <NavLink exact activeClassName="active" to="/Login">Login</NavLink>
         <NavLink exact activeClassName="active" to="/dashboard">Dashboard</NavLink>
         
       </div>
       <div className="content">
         <Switch>
           <Route exact path="/" component={Home}/>
           <PublicRoute path="/login" component={Login}/>
           </Switch>
           <Switch>
           <PrivateRoute path="/dashboard" component={Dashboard}/>
           </Switch>
       </div>
     </div>
     </BrowserRouter>
      
    </div>
  );

}

export default App;
