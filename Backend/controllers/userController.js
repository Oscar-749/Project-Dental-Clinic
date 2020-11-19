const { User, Sequelize} = require("../models/index");
const Op = Sequelize;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const auth = require('../middleware/auth');
const user = require('../models/user');

const UserController = {

    getAll(req, res){
        
    },

    async register(req, res){

        try {
            const hash = await bcrypt.hash(req.body.password, 6); 
            req.body.password = hash;
            const user = await User.create(req.body);
            res.status(201).send(user, message:'Te has registrado correctamente');
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'No se creo el user' });
        }

        // try{
        //     const user = await User.create({
        //         name: req.body.name,
        //         surname: req.body.surname,
        //         email: req.body.email,
        //         password: req.body.password,
        //         phone: req.body.phone,
        //         birth: req.body.birth,
        //         gender: req.body.gender
        //     });
        //     res.send({user, message: 'Te has registrado correctamente'})
        //     }catch (error){
        //     console.error(error);
        //     res.status(500).res.send({message: 'Ha habido un problema al registrarte'})
        // }
    },

    login(req, res){
        
    },
    
    profile(req, res){
        res.send(req.user)
    },

    updateUser(req, res){

    },
  
    deleteUser(req, res){
  
    },
};

module.exports = UserController;