const es6 = require('es6-promise');

var promise = new Promise(function (fulfill, reject) {

  setTimeout(function ()
  {
    //fulfill("FULFILLED!");
    reject(new Error("REJECTED!"))

  },300)
});
//promise.then(console.log)
function onReject (error) {
  console.log(error.message);
}
promise.then(null, onReject);
