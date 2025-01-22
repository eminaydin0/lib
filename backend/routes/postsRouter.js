const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');

router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostsById);
router.post('/', postsController.createPosts);
router.put('/:id', postsController.updatePosts);
router.delete('/:id', postsController.deletePosts);

module.exports = router;