const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;
const app = express();
const connectDB = require('./config/db');

connectDB();



// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Cors middleware
app.use(
  cors({
  origin: ['http://localhost:5000', 'http://localhost:3000'],
  credentials: true,
  }
));

app.get('/', (req,res)=> {
  res.send({message: 'Welcome to the RandomIdea API'});
});


const ideaRouter = require('./routes/ideas');

app.use('/api/ideas/',ideaRouter);

app.listen(port, ()=> console.log(`Serer listening 0n ${port}`));