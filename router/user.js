const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserSchema = require('./../model/User');

router.post('/register', (req, res) => {
    // 账号是否已存在
    UserSchema.findOne({accountNumber: req.body.accountNumber})
        .then(user => {
            if(user) {
                res.status(404).send("账号已存在");
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if(err) throw err;
                        var newUser = new UserSchema({
                            accountNumber: req.body.accountNumber,
                            userName: req.body.userName,
                            email: req.body.email,
                            password: hash
                        });
                        newUser.save()
                            .then(user => {
                                res.json(user);
                            })
                            .catch(err => {
                                throw err;
                            })
                    });
                });
            }
        })
})

router.post('/login', (req, res) => {
    UserSchema.findOne({accountNumber: req.body.accountNumber})
        .then(user => {
            if(!user) res.status(404).send("账号不存在");
            else {
                bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    if(isMatch) {
                        res.status(200).send('登录成功');
                    } else {
                        res.status(401).send('密码错误');
                    }
                });
            }
        })
})

module.exports = router;