const express = require('express');
const postRouter = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage()})
const postController =require('../controllers/post.controller');
const identifyUser = require('../middleware/auth.middleware');


postRouter.post('/', upload.single("imgUrl"), identifyUser, postController.createPostController)

module.exports=postRouter