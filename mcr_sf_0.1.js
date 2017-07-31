console.log("... mcr_sf_0.1.js file has loaded ...");
/* This is the MCR Standard Function Rev 0.1 File  */

/* Create an empty object with {}
   This object will be a reserved 'keyword', reserved by mcr, and
   ensure that our variables will not create a conflict with any
   other JavaScript variables. Functions enclosed within this
   object will become methods of this object 'mcrSf  */

var mcrSf = {};
mcrSf.rev = "0.1";

/**
 * generates a random number between two values (min and max)
 * @param {Number} min - start value of specified range (lowest possible value)
 * @param {Number} max - end value of specified range (highest possible value)
 * @return {Number} - random value between min and max (inclusive)
 *
 * mcrSf.randomNum(0, 10)
 * returns >= 0 <= 10 //e.g. any one integer number between 0 and 10 inclusive
 * mcrSf.randomNum(6, 10)
 * returns >= 6 <= 10 //e.g. any one integer number between 6 and 10 inclusive
 * mcrSf.randomNum(0, 0)
 * returns 0
 * mcrSf.randomNum(10, 10)
 * returns 10
 * mcrSf.randomNum(-5, 5)
 * returns >= -5 <= 5 //e.g. any one integer number between -5 and 5 inclusive
 * mcrSf.randomNum(10, 0)
 * returns null
 * mcrSf.randomNum('ABC', 10)
 * returns null
 * mcrSf.randomNum(0, 'ABC')
 * returns null
 * mcrSf.randomNum('', 10)
 * returns null
 * mcrSf.randomNum(0, '')
 * returns null
 * mcrSf.randomNum(null, 10)
 * returns null
 * mcrSf.randomNum(0, null)
 * returns null
 *
 * STRATEGY: Avail of Math.floor(Math.random() * x + y) formulae
 */ 
 mcrSf.randomNum = function(min, max) {
    mcrSf.randomNum.rev = "0.1";
    if (min > max || isNaN(min) || isNaN(max) || min == "" || max == "" || min == null || max == null) {return null;}
    return Math.floor(Math.random() * (max - min + 1) + min);
}