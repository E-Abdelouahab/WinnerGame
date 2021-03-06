const Question = require('../models/Questions.model');

// GET QUESTIONS
const getQuestin = async (req,res)=>{
    try {
        const questions = await Question.find();
        res.json(questions) 
    } catch (error) {
        res.json({message:error})
    }
};

// POST NEW QUESTION 
const postQuestion = async (req, res)=>{

    const newQuestion = new Question({
        question        : req.body.question,
        answer          : req.body.answer,
        false_choice1   : req.body.false_choice1,
        false_choice2   : req.body.false_choice2,
        false_choice3   : req.body.false_choice3,
        points          : req.body.points
    });
    try {
        const saveQuestion = await newQuestion.save();
        res.json(saveQuestion);
    } catch (error) {
        res.json({message:error})
    } 
};

// UPDATE QUESTION
const updateQuestion = async (req, res)=>{
    try {
        const questionUpd = await Question.updateOne(
            {_id:req.params.id},
            {
                $set:{    
                    question        : req.body.question,
                    answer          : req.body.answer,
                    false_choice1   : req.body.false_choice1,
                    false_choice2   : req.body.false_choice2,
                    false_choice3   : req.body.false_choice3,
                    points          : req.body.points
                },
            }
        );
        res.status(200).json(questionUpd);
    } catch (error) {
        res.json({message:error})
    }
}

// DELETE QUESTION 
const deleteQuestion = async (req, res)=>{
    try {
        const questionDel = await Question.remove({_id:req.params.id});
        res.json(questionDel);
    } catch (err) {
        res.json({message:err});
    }
}

module.exports = {
    getQuestin, 
    postQuestion, 
    updateQuestion, 
    deleteQuestion
};