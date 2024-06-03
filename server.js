const express = require('express');
const port = 5000;
const app = express();


app.get('/', (req,res)=> {
  res.send({message: 'Welcome to the RandomIdea API'});
});

const iddeaRouter = require('./routes/ideas');

app.use('/api/ideas/',iddeaRouter);

app.listen(port, ()=> console.log(`Serer listening 0n ${port}`));