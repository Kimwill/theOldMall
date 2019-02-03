const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const mongodbURL = require('./config/key').mongodbURL;

// 连接数据库
mongoose.connect(mongodbURL)
    .then(() => {
        console.log('mongodb is connected sucessfully');
    })
    .catch(err => {
        throw err;
    })

app.get('/', (req, res) => {
    res.send('Hello');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user',userRouter);

app.listen(3000, () => {
    console.log('running on 3000');
})