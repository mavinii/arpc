var express = require("express"); 
var app = express();
var port = 3000

app.use(express.static("public"));      //para o express enchergar meu CSS da pgn public
app.set("view engine", "ejs");          //nao precisa usar .ejs nas rotas, simplifica o codigo
 
//APP.JS MAIN PAGE NOT INDEX.ejs
app.get('/', function(req, res){
    res.render("index");
});

app.get('/aboutUs', function(req, res){
    res.render("aboutUs");
});

app.get('/homeGroup', function(req, res){
    res.render("homeGroup");
});

app.get('/youthChildren', function(req, res){
    res.render("youthChildren");
});

app.get('/youngAdults', function(req, res){
    res.render("youngAdults");
});

app.get('/internacionalCafe', function(req, res){
    res.render("internacionalCafe");
});

app.get('/communityCare', function(req, res){
    res.render("communityCare");
});

app.get('/events', function(req, res){
    res.render("events");
});

app.get('/rota', function(req, res){
    res.render("rota");
});

app.get('/sermons', function(req, res){
    res.render("sermons");
});

app.get('/blog', function(req, res){
    res.render("blog");
});

app.get('/caterpillarKidz', function(req, res){
    res.render("caterpillarKidz");
});

app.get('/contacts', function(req, res){
    res.render("contacts");
});

//PAGE DOESN'T EXIST, this route need stay in the end!
app.get('/*', function(req, res){
    res.render("404");
});

// STARTING THE SERVER PORT: localhost:3000
app.listen(port, () => console.log(`App listening on port ${port}!`))