const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/postCreations', controllers.createPost);
router.post('/commentCreations', controllers.createComment);
router.get('/postsList', controllers.getAllPosts);


module.exports = router;