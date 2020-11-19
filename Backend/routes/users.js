const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', UserController.getAll);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', auth, UserController.profile);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;
