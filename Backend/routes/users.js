const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.get('/', UserController.getAll);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
// router.get('/profile',UserController.profile);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;