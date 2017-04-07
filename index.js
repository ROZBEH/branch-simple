// Hello this is a comment.
// Yes it is.
// Nelson.

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var app = express();
var expstate = require('express-state');
var PORT = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));
expstate.extend(app);

app.set("state namespace",'App');

var API_KEYS = {
	"GOOGLE_API_KEYS":"1223231334353",
	"FACEBOOK_API_KEYS":"13892372832",
}
app.expose(API_KEYS, "API_KEYS")

app.get("/", function(req, res) {
	res.expose(friends,'friends');
	var friends = ['nelson', 'ishan', 'mathew']
    res.render("home", {
    	friend:friends
    });
});

app.listen(PORT, function() {
    console.log('Server listening on port:', PORT);
});
