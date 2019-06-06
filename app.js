var express = require("express"); 
var app = express();
var bodyParser = require("body-parser");
var port = 3000 //port server

app.use(express.static("public"));      //para o express enchergar meu CSS da pgn public
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");          //no .ejs needed

//provisorio porque usaremos banco de dados
var rotas = [
    {date: "14th apr", name: "Ann and Andrew", tel: "087-9694513", email:"annfriel61@gmail.com"},
    {date: "20th apr", name: "Marcos and Aline", tel: "000-123456", email:"miltretamano@seila.com"}
];
 
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
    res.render("rota", {rotas:rotas});
});

// IMPORTANT METHOD POST
app.post('/rota', function(req, res){
    // get data from form and add to /rota array
    var date = req.body.date;
    var name  = req.body.name;
    var tel = req.body.tel;
    var email = req.body.email;
    var newRota = {date: date, name: name, tel: tel, email: email}
    rotas.push(newRota);
    //redirect back to compgrounds page
    // res.redirect("/rota/painel");
});

// LOGIN ACEPT REDIRECT TO PAINEL
app.get('/rota/painel', function(req, res){
    res.render("painel");
});

app.get('/sermons', function(req, res){
    res.render("sermons");
});

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

//PAGE DOESN'T EXIST, this route need stay in the end!
app.get('/*', function(req, res){
    res.render("404");
});

// STARTING THE SERVER PORT: localhost:3000
app.listen(port, () => console.log(`App listening on port ${port}!`))