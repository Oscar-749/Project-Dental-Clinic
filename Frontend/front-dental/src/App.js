import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import 'antd/dist/antd.css'

import Header from './components/header/header';
import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';

function App() {
  return (
    <BrowserRouter>
      <Header user ={user} setUser={setUser}/>

      <Switch>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;