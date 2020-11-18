const { User,Appointment, Sequelize} = require("../models/index");
const Op = Sequelize;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const auth = require('../middleware/auth');
const user = require('../models/user');

const UserController = {

};

module.exports = UserController;