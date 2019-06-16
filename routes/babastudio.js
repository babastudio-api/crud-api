const express = require('express');
const babaController = require('../controller/babastudio');
const authController = require('../controller/auth');
const router = express.Router();
const { body } = require('express-validator/check');

router.get('/posts/:token', babaController.getPosts);

router.post('/create', [
    body('title')
    .trim()
    .isLength({ min: 5 }),
    body('content')
    .trim()
    .isLength({ min: 5 })
  ], babaController.CreatePost);

router.get('/detail/:postId', babaController.getDetail);

router.put('/edit/:postId', babaController.editPost);

router.delete('/delete/:postId', babaController.deletePost);

router.post('/signup', authController.signupUser);

router.post('/login',authController.loginUser);

module.exports = router;