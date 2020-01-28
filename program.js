const es6 = require('es6-promise');

// var promise = new Promise(function (fulfill, reject) {

//   fulfill("I FIRED")
//   reject(new Error("I DID NOT FIRE"));
// });
//promise.then(console.log)


// function onReject (error) {
//   console.log(error.message);
// }
// var promise = new Promise(function(fulfill,reject)
// {
//   fulfill("PROMISE VALUE");

// })
// promise.then(console.log);
//  console.log("MAIN PROGRAM");

// const promise = Promise.resolve('Secret Value');
// promise.then(console.log).catch(err => console.log(err));

// const promiseOne = first()

// const promiseTwo = promiseOne.then(function(success){
//   return second(success);
// })
// promiseTwo.then(console.log)

//   function attachTitle(name){
//     return 'DR. ' + name;
//   }
  
// Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
 


function parsePromised(file) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(file));
    } catch (err) {
      reject(err);
    }
  });
}
function onReject(error) {
  console.log(error.message);
}
parsePromised(process.argv[2])
.then(null, onReject);