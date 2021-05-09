const express = require("express");
const morgan = require("morgan");

// const { result } = require("lodash");
// const Blog = require("./models/blog");


const blogRoutes = require("./routes/blogRoutes"); // For Routing The File
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
app.use(express.urlencoded({ extended: true }))


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
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog 3',
//         snippet: 'About My New Blog 3',
//         body: 'more about my new blog 3'
//     });


//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// type --http://localhost:3000/all-blogs
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => console.log(err));
// });

// type --http://localhost:3000/single-blog
// app.get('/single-blog', (req, res) => {
//     Blog.findById("60902868a6d5f23c50c95ecb")
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => console.log(err));
// });




// Routing for ejs
app.get('/', (req, res) => {

    // const blogs = [
    //     { title: 'Yoshi Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
    //     { title: 'Mandore Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
    //     { title: 'Koishi Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
    // ];
    // res.render('index', { title: 'Home', blogs });

    res.redirect('/blogs');
});



app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


// blog routes  --only for blog route.
app.use('/blogs', blogRoutes);

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