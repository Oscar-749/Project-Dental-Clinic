const appointment = require('../models/appointment');
const {Appointment, User, Sequelize} = require('../models/index');
const Op = Sequelize;

const AppointmentController = {
    async getAll(req, res){
        try{
            const appointment = await Appointment.find();
            res.send(appointment);
        }catch(error){
            console.log(error);
            res.status(500).send({message: "Hay algun problema"});
        }
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
        try {
            const { id } = req.params
            const appointment = await Appointment.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'Te eliminaste, no te extrañaremos.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Pon tus credenciales correctas'})
        }
    }
};

module.exports = AppointmentController;