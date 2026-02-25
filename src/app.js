const express = require('express');
const app = express();
const authRouter = require('../src/routes/auth.route');
const cookieParser = require('cookie-parser');
const postRouter = require('./routes/post.route');
const followRouter = require('./routes/follow.route');

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/users', followRouter);


module.exports=app;