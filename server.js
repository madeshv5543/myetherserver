var express = require('express');
var path = require('path');

// invoke an instance of express application.
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
// set our application port
app.set('port', 3000);

// set morgan to log info about our requests for development use.


// initialize body-parser to parse incoming parameters requests to req.body


// initialize cookie-parser to allow us access the cookies stored in the browser. 


// initialize express-session to allow us track the logged-in user across sessions.


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.


// middleware function to check for logged-in users


// route for Home-Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('*',(req, res) => {
    res.redirect('/')
} )



// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));