const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./Routes/user');
const dotenv = require('dotenv')

dotenv.config();

const app = express();

const dbURI = process.env.DBURI

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








