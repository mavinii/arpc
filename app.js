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

app.get('/internationalStudents', function(req, res){
    res.render("internationalStudents");
});

app.get('/communityCare', function(req, res){
    res.render("communityCare");
});

app.get('/events', function(req, res){
    res.render("events");
});

//ROTAS
app.get('/rota', function(req, res){
    var rotas = [
        {date: "14th apr", name: "Ann and Andrew", tel: "087-9694513", email:"annfriel61@gmail.com"},
        {date: "20th apr", name: "Marcos and Aline", tel: "000-123456", email:"miltretamano@seila.com"},
        {date: "30th apr", name: "Ana and Eze", tel: "123-156489", email:"casalindo@gmail.com"},
        {date: "50th apr", name: "Ethan and Sthep", tel: "321-321321", email:"irish@couple.com"}
    ]
    res.render("rota", {rotas:rotas});
});

app.get('/sermons', function(req, res){
    res.render("sermons");
});

// app.get('/blog', function(req, res){
//     res.render("blog");
// });

app.get('/caterpillarKidz', function(req, res){
    res.render("caterpillarKidz");
});

app.get('/contacts', function(req, res){
    res.render("contacts");
});

// login and password
app.get('/login', function(req, res){
    res.render("login");
});

// LOGIN ACEPT REDIRECT TO PAINEL
app.get('/painel', function(req, res){
    res.render("painel");
});

//PAGE DOESN'T EXIST, this route need stay in the end!
app.get('/*', function(req, res){
    res.render("404");
});

// STARTING THE SERVER PORT: localhost:3000
app.listen(port, () => console.log(`App listening on port ${port}!`))