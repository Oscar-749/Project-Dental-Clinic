import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
        props.setUser(null)
    }
    return(
        <header className="header">
            <NavLink to="/">Home</NavLink>
            <div className="user">
                {props.user ?
                    <>
                        <NavLink to="/appointment">Pedir Cita</NavLink>
                        <span>{props.user?.name}</span>
                        <span onClick={logout}>Cerrar Sesión</span>
                         
                    </> :
                    <>
                        <NavLink to="/login">Iniciar Sesión</NavLink>
                        <NavLink to="/register">Registrase</NavLink>
                    </>
                }
            </div>
        </header>
    )
}

export default Header