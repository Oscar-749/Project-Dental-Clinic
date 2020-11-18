const { User,Appointment, Sequelize} = require("../models/index");
const Op = Sequelize;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const auth = require('../middleware/auth');
const user = require('../models/user');

const UserController = {

    getAll(req, res){

    },

    register(req, res){

    },

    login(req, res){

    },
    
    profile(req, res){

    },

    updateUser(req, res){

    },
  
    deleteUser(req, res){
  
    }
};

module.exports = UserController;