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
 


// function parsePromised(file) {
//   return new Promise(function (fulfill, reject) {
//     try {
//       fulfill(JSON.parse(file));
//     } catch (err) {
//       reject(err);
//     }
//   });
// }
// function onReject(error) {
//   console.log(error.message);
// }
// parsePromised(process.argv[2])
// .then(null, onReject);



// function iterate(num) {
// console.log(num);
// return num + 1;
// }

// function alwaysThrows() {
// throw new Error('OH NOES');
// }

// function onReject(error) {
// console.log(error.message);
// }

// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(alwaysThrows)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .catch(onReject); 


// function all(a, b) {
//   return new Promise(function (fulfill, reject) {
//     var counter = 0;
//     var out = [];

//     a.then(function (val) {
//       out[0] = val;
//       counter++;

//       if (counter >= 2) {
//         fulfill(out);
//       }
//     });

//     b.then(function (val) {
//       out[1] = val;
//       counter++;

//       if (counter >= 2) {
//         fulfill(out);
//       }
//     });
//   });
// }

// all(getPromise1(), getPromise2())
//   .then(console.log); 

require('es6-promise')
const HTTP = require("q-io/http")

HTTP.read('http://localhost:7000')
.then((response) => response.toString())
.then(response => {
HTTP.read('http://localhost:7001/'+ response)
.then(JSON.parse)
.then(console.log)
})