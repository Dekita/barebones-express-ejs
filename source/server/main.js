/**
 * Set express application variables
 */
var express = require('express');
var app = express();

/**
 * Load configuration
 */
var config = require('./config');

/**
 * Set view engine
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/**
 * Set public directory
 */
app.use(express.static(__dirname + '/../client'));

/**
 * Set handler for '/' page
 */
app.get('/', function(request, response) {
  response.render('index',{title:'Your App'});
});

/**
 * Set handler for '/helloworld' page
 */
app.get('/helloworld', function(request, response) {
  response.send('Hello World!');
});

/**
 * Make app listen to port
 */
app.listen(config.port, config.site, function() {
  var address = config.site+':'+config.port;
  console.log("App is running @:", address);
});
