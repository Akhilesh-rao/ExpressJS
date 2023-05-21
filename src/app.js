const { response } = require("express");
const express = require("express");
const app = express();
const hbs = require("hbs")
const path = require("path")
const port = 3000
// console.log(__dirname);
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath))

// set the view engine for dynamic website
// inorder to set the hbs we need view folder 
app.set("view engine", 'hbs');
// changing view to anything for example templates
const temppath = path.join(__dirname, '../templates/views');
app.set("views", temppath);
const partialpath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialpath)


app.get("/", (req, res) => {
    // res.setHeader('content-type', 'text/html')
    // res.send("Welcome to my Home page");
    res.render("index")

});
app.get("/about", (req, res) => {
    // res.setHeader('content-type', 'text/html')
    // res.send("Welcome to my About page");
    res.render("about")

});
app.get("/contact", (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.status(200).write("<h1>Welcome to my Contact page</h1>");
    res.write("Welcome to my contact page");
    res.send();

});

app.get("*", (req, res) => {
    // res.setHeader('content-type', 'text/html')
    // res.send("Welcome to my About page");
    res.render("404",{
        error:"This page is not found",
    })

});
app.get("/about/*", (req, res) => {
    // res.setHeader('content-type', 'text/html')
    // res.send("Welcome to my About page");
    res.render("404",{
        error:"This About page is not found",
    })

});

app.listen(port, () => {
    console.log(`Listening to the port no ${port}`)
})