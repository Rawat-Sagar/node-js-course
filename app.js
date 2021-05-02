const express = require("express");
const morgan = require("morgan");
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//  listen for requests
app.listen(3000);

// app.get('/', (req, res) => {
//     res.send('<p>Express App</p>');
// });



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


// Routing for ejs
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
        { title: 'Mandore Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
        { title: 'Koishi Finds eggs', snippet: 'lorem ipsum dolor dit amet ' },
    ];
    res.render('index', { title: 'Home', blogs });
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
// });