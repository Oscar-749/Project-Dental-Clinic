import './App.css';
import 'antd/dist/antd.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios';

import Header from './components/header/header';
import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';
import Appointment from './containers/appointment/appointment';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      axios.get('http://localhost:3000/users/profile',{headers:{Authorization:token}})
      .then(res => setUser(res.data))
    }
  }, [])

  return (
    <BrowserRouter>
      <Header user ={user} setUser={setUser}/>
      

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
        <Route path ="/appointment" component={Appointment} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;