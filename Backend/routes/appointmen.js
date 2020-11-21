const router = require ('express').Router();
const AppointmenController = require('../controllers/appointController');

router.get('/', AppointmenController.getAll);
router.post('/create', AppointmenController.createAppoint);
router.delete('/delete/:id', AppointmenController.deleteAppoint);

module.exports = router;