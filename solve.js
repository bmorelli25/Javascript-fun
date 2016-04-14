// File 3 of 3
// This makes use of our quadratic module to solve the equation.

// requires our quadratic.js file (which in turn requires discriminant.js)
var quad = require('./quadratic');

// requires the use of JS prompt function
var prompt = require('prompt');

//prompts the user to input the three needed values: a, b, c. If there is no
//error, continue on
prompt.get(['a', 'b', 'c'], function( err, result) {
    if (err) {return onErr(err); }
    console.log('Command-line input received');
    console.log('a: ' + result.a);
    console.log('b: ' + result.b);
    console.log('c: ' + result.c);
    
    //sends the values through and receives the result from the quad function. If no errors, we log the roots!
    quad(result.a, result.b, result.c, function (err, quadsolve) {
        if(err){
            console.log('Error: ', err);
        } else {
            console.log("Roots are " + quadsolve.root1() + ", " + quadsolve.root2());
        }
         
    });
    
});