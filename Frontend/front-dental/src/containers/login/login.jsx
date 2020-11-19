import axios from 'axios';
import './login.css';
import React, {Component, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {notification} from 'antd';

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const res = await axios.post('http://localhost:3000/users/login', {email, password})
            localStorage.setItem('token', res.data.token)
            notification.success({message: 'Has iniciado sesion correctamente'})
            props.setUser(res.data.user)
            history.push('/')
        }catch(error){
            console.log(error)
            notification.error({message:'Error al iniciar sesion'})
        }
        
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
            <input type="email" onChange={event=>setEmail(event.target.value)} name="email" placeholder="Introduce tu email"/>
            <input type="password" onChange={event=>setPassword(event.target.value)} name="password" placeholder="Introduce tu contraseña"/>
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
}

export default Login