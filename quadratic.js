// File 2 of 3
// This file impliments the quadratic equation solver as a module

// Requires the use of our discriminant.js file
var disc = require('./discriminant');

//exports a function
module.exports = function (a, b, c, next) {
    //first error checks. If a=0, show the error and stop
    if (a === 0) {
        next(new Error("a should not be zero"));
        
    //next eror check. If anything is below zero, show the error and stop    
    } else if (disc(a, b, c) < 0) {
        next(new Error("discriminant is less than zero, no real roots"));
        
    //no errors, time to run the function! Passes our a, b, c variables through to discriminant.js to get the roots.    
    } else {
        return next(null, {
            root1: function () {
                return (-b - Math.sqrt(disc(a, b, c))) / (2 * a);
            },
            root2: function () {
                return (-b + Math.sqrt(disc(a, b, c))) / (2 * a);
            }
        });
    }
}