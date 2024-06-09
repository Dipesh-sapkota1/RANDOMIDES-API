const express = require('express');
const port = 5000;
const app = express();


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.get('/', (req,res)=> {
  res.send({message: 'Welcome to the RandomIdea API'});
});


const ideaRouter = require('./routes/ideas');

app.use('/api/ideas/',ideaRouter);

app.listen(port, ()=> console.log(`Serer listening 0n ${port}`));