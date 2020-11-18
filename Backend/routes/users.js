const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', UserController.getAll);
router.get('/register', UserController.register);
router.get('/login', UserController.login);
router.get('/profile', auth, UserController.profile);
router.get('/update/:id', UserController.updateUser);
router.get('/delete/:id', UserController.deleteUser);

module.exports = router;
