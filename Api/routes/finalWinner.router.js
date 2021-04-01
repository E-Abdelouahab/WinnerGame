const finalWinnerController = require('../controllers/finalWinner.controller');
const router = require('express').Router();

router.route('/:id').get(finalWinnerController.findFinalWin)
router.route('/post').post(finalWinnerController.postFinalWin)

module.exports = router;