const appointment = require('../models/appointment');
const {Appointment, User, Sequelize} = require('../models/index');
const Op = Sequelize;

const AppointmentController = {
    getAll(req, res){
        Appointment.findAll()
        .then(users => res.send(appointment))
        .catch(error => {
            console.log(error)
            res.status(500).send({message:'Hubo un problema en crear el usuario'});
        })
    },

    async createAppoint(req, res){
        try{
            const appointment = await Appointment.create(req.body);
            res.send({appointment, message:'Cita creada con exito'})
        }catch(error){
            console.log(error)
            res.status(500).send({appointment, message:'Hay algun problema al crear la cita'})
        }
    },

    async deleteAppoint(req, res) {
        try{
            const appointment = await Appointment.findByIdAndDelete(req.params.id)
            res.json({message:'Cita cancelada con exito'});
        }catch(error){
            console.log(error);
            res.status(500).send({message:'Hay algun problema al eliminar la cita', error})
        }
    }
};

module.exports = AppointmentController;