const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./router/user');

app.get('/', (req, res) => {
    res.send('Hello');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user',userRouter);

app.listen(3000, () => {
    console.log('running on 3000');
})