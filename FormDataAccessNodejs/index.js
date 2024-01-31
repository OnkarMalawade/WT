const express = require('express');
var app = express();

app.get('/register',function (req, res) {
    res.sendFile(__dirname+'/register.html');    
});

app.get('/formSubmit',function(req,res){
    res.send("Your Name is "+req.query.name+" and Your city is "+req.query.city);
});

app.listen(7090);

// // Import the Express module
// const express = require('express');

// // Create an Express application
// var app = express();

// // Define a route handler for the '/register' GET request
// app.get('/register', function (req, res) {
//   // Send the 'register.html' file from the current directory ('__dirname')
//   res.sendFile(__dirname + '/register.html');
// });

// // Define a route handler for the '/formSubmit' GET request
// app.get('/formSubmit', function (req, res) {
//   // Extract the user's input from the query string
//   const name = req.query.name;
//   const city = req.query.city;

//   // Send a response message using the extracted user input
//   res.send('Your Name is ' + name + ' and Your city is ' + city);
// });

// // Start the Express application and listen on port 7090
// app.listen(7090);
