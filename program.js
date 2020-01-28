const es6 = require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
  fulfill("I FIRED")
  reject(new Error("I DID NOT FIRE"));
});
//promise.then(console.log)
function onReject (error) {
  console.log(error.message);
}
promise.then(console.log,onReject);
