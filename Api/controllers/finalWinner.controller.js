const finalWinnerSchema = require('../models/FinalWinner.model');

// FIND ALL FINAL WINNER
const findFinalWin = async (req, res)=>{
    try {
        const fWinners = await finalWinnerSchema.findOne({_id:req.params.id}).populate('id_round').populate('id_participant').populate('id_gift');
        res.json(fWinners) 
    } catch (error) {
        res.json({message:error})
    }
};

// POST NEW FINAL WINNER
const postFinalWin = async (req, res)=>{
    
    const newWinnner = new finalWinnerSchema({
        id_round        : req.body.id_round,
        finalScore     : req.body.finalScore,
        id_participant  : req.body.id_participant,
        id_gift         : req.body.id_gift
    });
    try {
        const saveWinner = await newWinnner.save();
        res.json(saveWinner);
    } catch (error) {
        res.json({message:error})
    } 
};

module.exports = {
    findFinalWin,
    postFinalWin
};