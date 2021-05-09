const express = require('express');
const blogContoller = require("../controllers/blogController");
const router = express.Router();



// Blog Routes  --using index.ejs template  --http://localhost:3000/blogs --outputting doc in views
router.get('/', blogContoller.blog_index);

// Post Request  -- to save the details to db
router.post('/', blogContoller.blog_create_post);

// to create a blog
router.get('/create', blogContoller.blog_create_get);


// route parameters :id will look into db
router.get('/:id', blogContoller.blog_details)

// Delete Request
router.delete('/:id', blogContoller.blog_delete);




module.exports = router;