const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET BACK ALL POSTS
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err}); 
    }
});

//SUBMIT A NEW POST
router.post('/', async (req,res) => {
  //console.log(req.body);
  const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try{
        const savePost = await post.save();
        res.json(savePost);
    }catch(err) {
        res.json({message: err});
    }
});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
    //console.log(req.params.postID);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
   
});

//DELETE SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message: err});
    }
    
});

//UPDATE SPECIFIC POST
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId}, { $set: {title: req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

module.exports = router;