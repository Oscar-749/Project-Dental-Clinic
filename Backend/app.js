const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const bodyparser = require('body-parser');
const PORT = 3000;

const usersRouter = require('./routes/users');
const appointmentRouter = require('./routes/appointmen');
//const historyRouter = require('');

app.use(express.json());
app.use(bodyparser.json());

//====CORS====//
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//====CONEXION DATA BASE====//
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database:'project-dental-clinic',
})
.then(() => console.log('Base de Datos funcionando'))
.catch((error) => console.log('Error al conectar la DataBase'));

app.listen(PORT, () => console.log('Servidor levantado en el puerto ' + PORT));

//====ENRUTADO A LOS ENDPOINTS====//
app.use('/users', usersRouter);
app.use('/appointments', appointmentRouter);
// app.use('');