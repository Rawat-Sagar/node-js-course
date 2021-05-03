const express = require("express");
const morgan = require("morgan");

const { result } = require("lodash");
const Blog = require("./models/blog");
const mongoose = require("mongoose");

// express app
const app = express();


// connect to mongo db
const dbURI = 'mongodb+srv://ninja_sagar:sagar@089@nodejstuts.1g4ix.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose
    .connect(dbURI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => app.listen(3000))
    .catch((err) => console.log(err));



// register view engine
app.set('view engine', 'ejs');

//  listen for requests
// app.listen(3000);

// app.get('/', (req, res) => {
//     res.send('<p>Express App</p>');
// });

// Express middleware  & static files
app.use(express.static('public'));


// MiddleWare --browser hangs and don't know how to move down to further code.
//  --So us next()

// app.use((req, res, next) => {
//     console.log("New Request Made :");
//     console.log('Host :', req.hostname);
//     console.log('Path :', req.path);
//     console.log('Method :', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log("In the next Middleware");
//     next();
// });

// Use Of Morgan MiddleWare
app.use(morgan('dev'));

// mongoose and mongo sandbox routes  ---getting and saving data in mongodb 
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog 2',
        snippet: 'About My New Blog',
        body: 'more about my new blog'
    });


    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

// type --http://localhost:3000/all-blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

// type --http://localhost:3000/single-blog
app.get('/single-blog', (req, res) => {
    Blog.findById("60902868a6d5f23c50c95ecb")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});




// Routing for ejs
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
        { title: 'Mandore Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
        { title: 'Koishi Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
    ];
    res.render('index', { title: 'Home', blogs });
});

// Blog Routes  --using index.ejs template  --http://localhost:3000/blogs --outputting doc in views
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => console.log(err));
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});



app.get('/blogs/create', (req, res) => {
    res.render('create', { title: ' Create a New Blog' });
});


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Pages' });
});



// Normal Routing 
// app.get("/about", (req, res) => {
//     res.sendFile("./views/about.html", { root: __dirname });
// });

// app.get("/", (req, res) => {
//     res.sendFile("./views/index.html", { root: __dirname });
// });

// redirects
// app.get('./about-me', (req, res) => {
//     res.redirect("./about.html");
// });

// 404 page
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// });'