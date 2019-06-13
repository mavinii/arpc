const express   = require('express'); 
const app       = express();
var bodyParser  = require('body-parser');
const mongoose  = require('mongoose');

var port = 3000 //port server 

// Connection to data base
mongoose.connect('mongodb+srv://pgmarcosoliveira:<passworld>@cluster0-jqh2a.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to DB!');
}).catch(err => {
    console.log('ERROR:', err.message);
});

app.use(express.static("public"));      //para o express enchergar meu CSS da pgn public
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");          //no .ejs needed

// SUNDAY Schema SETUP
var sundaySchema = new mongoose.Schema({
    date: String,
    name: String,
    tel: String,
    email: String
});

var Sunday = mongoose.model("Sunday", sundaySchema);
// Sunday.create(  USAR ESSE COD PARA TESTAR OUTRAS ROTAS
//     {
//         date: "20th apr", 
//         name: "Aline and Marcos", 
//         tel: "000-00000", 
//         email:"seila@seila.ie"
//     }, function(err, sunday){
//         if(err){
//             console.log(err);
//         } else{
//             console.log("NEw Sunday Created: ");
//             console.log(sunday);
//         }
//     });
 
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
    //Get all rotas from DB
    Sunday.find({}, function(err, allSunday){
        if(err){
            console.log(err);
        } else {
            res.render("rota", {rotas:allSunday});
        }
    })
});

// IMPORTANT METHOD POST
app.post('/rota', function(req, res){
    // get data from form and add to /rota array
    var date = req.body.date;
    var name  = req.body.name;
    var tel = req.body.tel;
    var email = req.body.email;
    var newSunday = {date: date, name: name, tel: tel, email: email}
    //Create a new SUNDAY and save to DB
    Sunday.create(newSunday, function(err, newlySundayCreated){
        if(err){
            console.log(err)
        } else{
            //redirect back to compgrounds page
            // res.redirect("/rota/painel");
        }
    })
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