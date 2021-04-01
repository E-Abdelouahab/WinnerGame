const router = require('express').Router();

const participantController = require('../controllers/participant.controller');
const verifyTokenParticipant = require('../middleware/verifyTokenParticipant');
const verifyTokenAdmin = require('..//middleware/verifyTokenAmin')


router.get('/', participantController.getParticipant)
router.route('/SignUp').post(participantController.registerParticipant)
router.route('/login').post(participantController.loginParticipant)
router.route('/validateParticipant/:id').patch( participantController.validerParticipant)
router.route('/sendScore/:id').patch( participantController.sendFinaleScore)



module.exports = router;