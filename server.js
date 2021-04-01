const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const server = express()
require('dotenv').config()
server.use(express.json())
server.use(cors())


const adminRouter = require('./api/routes/admin.router');
const participantRouter = require('./api/routes/participant.router');
const questiontRouter = require('./api/routes/question.router');
const qstTokenRouter = require('./api/routes/questionToken.router');
const roundRouter = require('./api/routes/round.router');
const rScoreRouter = require('./api/routes/roundScore.router');
const finalWinRouter = require('./api/routes/finalWinner.router');
const giftRouter = require('./api/routes/gifts.router');
const GRP_memberRouter = require('./api/routes/groupMember.router');

mongoose.connect(process.env.DB_CONNECT, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db is connected'))
  .catch(err => console.log(err))


  server.use('/admin', adminRouter);
  server.use('/participant', participantRouter);
  server.use('/question', questiontRouter);
  server.use('/groupMember', GRP_memberRouter);
  server.use('/question_token', qstTokenRouter);
  server.use('/round', roundRouter);
  server.use('/round_score', rScoreRouter);
  server.use('/final_winner', finalWinRouter);
  server.use('/gifts', giftRouter);

  const port  = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`server is connected in port: ${port}`);
  })