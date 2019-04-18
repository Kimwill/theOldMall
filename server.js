const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const profilesRouter = require('./router/profiles');
const uploadTokenRouter = require('./router/uploadToken');
const uploadCbRouter = require('./router/uploadCb');
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
app.use('/api/user', userRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/qiniu', uploadTokenRouter);
app.use('/api/qiniu', uploadCbRouter);

app.listen(3000, () => {
    console.log('running on 3000');
})