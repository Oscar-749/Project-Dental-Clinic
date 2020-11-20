const { User, Sequelize} = require("../models/index");
const Op = Sequelize;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const auth = require('../middleware/auth');
const user = require('../models/user');

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
        // try {
        //     const user = await User.findOne({
        //         where: {
        //             email: req.body.email
        //         }
        //     });
        //     const isMatch = await bcrypt.compare(req.body.password, user.password);
        //     if (!isMatch) {
        //         throw new Error('Credenciales incorrectas');
        //     }
        //     const token = jwt.sign({ id: user.id }, 'Estas dentro', { expiresIn: '1y' });
            
        //     await Token.create({ token, UserId: user.id, revoked: false });
        //     res.send({
        //         user,
        //         token
        //     })
        // } catch (error) {
        //     console.error(error);
        //     return res.status(500).send({
        //         message: 'Incorrecto'
        //     });
        // }
    },
    
    profile(req, res){
        res.send(req.user)
    },

    updateUser(req, res){

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