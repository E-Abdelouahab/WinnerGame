const mongoose = require('mongoose');
const Group_membersModel = require('./GroupMember.model');
const QuestionModel = require('./Questions.model');
const Question_tokenModel = require('./QuestionToken.model');

const roundSchema = new mongoose.Schema({
    id_group_member:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Group_membersModel
    },
    id_question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:QuestionModel
    },
    id_question_token:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Question_tokenModel
    },
    dateCreate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Round', roundSchema)