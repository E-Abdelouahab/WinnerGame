const QuestionModel = require('../models/Questions.model');
const RoundScore = require('../models/RoundScore.model');

// FIND ALL ROUND SCORES STATISTIC 
const findRoundSS = async (req, res)=>{
    try {
        const roundScores = await RoundScore.find().populate('id_round');
        res.json(roundScores) 
    } catch (error) {
        res.json({message:error})
    }
};

// POST NEW ROUND SCORES STATISTIC 
const postRoundScore = async (req, res)=>{

    const displayScore = await QuestionModel.findOne(
        {_id:req.params.id},
    )
    console.log(res.json(displayScore));

    
    const newRoundScore = new RoundScore({
        id_round   : req.body.id_round,
        score      : req.body.score
    });
    try {
        const saveRoundScore = await newRoundScore.save();
        res.json(saveRoundScore);
    } catch (error) {
        res.json({message:error})
    } 
};

module.exports = {
    findRoundSS,
    postRoundScore
};