const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./Routes/user');

const app = express();

const dbURI = 'mongodb+srv://pharmamekong:passwordformekong@cluster0.fspvpfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const dbURI = 

mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', UserRouter);

app.use((err, req, res, next)=>{
  console.log(error);
  res.status(500).json({error : 'An unknown error occured'})
})








