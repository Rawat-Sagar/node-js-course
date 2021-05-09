// blog_index , blog_details , blog_create_get , blog_create_post , blog_delete
const Blog = require('../models/blog.js');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch((err) => res.render('404', { title: 'BLOG NOT FOUND' }));
};

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a New Blog' });
};

const blog_create_post = (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            // response is json redirect not render because of AJAX handling the deletion code --Learn AJAX
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err));
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}