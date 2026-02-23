const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder:'post'
  });

  console.log(file);
  
  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id
  });

  console.log(post);
  

  res.status(201).json({
    message: "Post created successfully.",
    post
  })
};

module.exports = {
  createPostController,
};
