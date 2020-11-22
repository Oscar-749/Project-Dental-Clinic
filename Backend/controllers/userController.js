const { User, Appointment, Sequelize} = require("../models");
const Op = Sequelize;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const user = require('../models/user.js');

const UserController = {

    getAll(req, res){
        User.findAll()
        .then(users => res.send(users))
        .catch(error => {
            console.error(error)
            res.status(500).send({ message:'Hubo un problema en crear el usuario' });
        })
    },

    async register(req, res){

        try {
            console.log(JSON.stringify(req.body));
            const hash = await bcrypt.hash(req.body.password, 6); 
            req.body.password = hash;
            const user = await User.create(req.body);
            res.status(201).send({user: user, message:'Te has registrado correctamente'});
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'No se creo el user' });
        }
    },

    async login(req, res){
        try {
            const user = await User.findOne({
                where: {email: req.body.email}
            });
            if(!user){
                return res.status(400).send({message:'Correo o contraseña incorrectas'});
            }

            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({message: 'Wrong credentials'});            
            }
            const token = jwt.sign({ id: user.id },'oscar', { expiresIn:'1y'})
            
            res.send({user, token, message:'Has iniciado sesión'})
        } catch (error) {
            console.error(chalk.red(error))           
            res.status(400).send({message: 'Hubo un problema al intentar iniciar sesión con el usuario, verifique los campos'});
        }
    },
  
    async deleteUser(req, res){
        try {
            const { id } = req.params
            const user = await User.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'Te eliminaste, no te extrañaremos.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Pon tus credenciales correctas'})
        }
    },
};

module.exports = UserController;