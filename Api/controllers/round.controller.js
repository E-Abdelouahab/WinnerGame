const Round = require('../models/Round.model')

// FIND ALL DATA ROUND 
const findAllRound = async(req, res)=>{
    try {
        const rounds = await Round.find().populate('id_groupMember').populate('id_question').populate('id_questionToken')
        res.status(200).json(rounds)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

// POST ROUND 
const postRound  = async (req, res)=>{
    const newRound = new Round({
        id_groupMember     : req.body.id_groupMember,
        id_question         : req.body.id_question,
        id_questionToken   : req.body.id_questionToken
    })
    try {
        const saveRound = await newRound.save()
        res.status(200).json(saveRound) 
    } catch (error) {
        res.status(400).json({message:error})
    }
}

module.exports = {
    findAllRound,
    postRound
};