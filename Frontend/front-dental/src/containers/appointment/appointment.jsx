import React from 'react';
import './appointment.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {notification} from 'antd';

const Appointment = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const form = event.target;
            const appointment = {
                name: form.name.value,
                email:form.email.value,
                appointment_time: form.appointment_time?.value,
                service: form.service?.value
            }
            await axios.post('http://localhost:3000/appointments/create', appointment)
            notification.success({message:'Cita creada correctamente'})
            history.push('/')
            console.log(appointment);
        }catch(error){
            console.log(error)
            notification.error({message: 'Error al crear la cita'})
        }
    }

    return(
        <form className = "appointment" onSubmit = {handleSubmit}>
            <h2>Pide tu Cita</h2>
            <input type = "text" name= "name" placeholder="Introduce tu nombre"/>
            <input type = "email" name= "email" placeholder="Introduce tu email"/>
            <input type = "date" name= "date" placeholder="Introduce la hora"/>
            <input type = "text" name= "name" placeholder="Introduce el servicio"/>

            <button type ="submit">Pedir Cita</button>
        </form>
    )
}

export default Appointment