const rScoreSController = require('../controllers/roundScore.controller')
const router = require('express').Router();

router.route('/').get(rScoreSController.findRoundSS)
router.route('/post').post(rScoreSController.postRoundScore)

module.exports = router

