var ourResult = true;

var promise = new Promise(function(resolve, reject){
  if(ourResult){
    resolve("It Worked!");
  }
  else{
    reject (':(');
  }
});


//helper functions
var successFn = function(message) {
  console.log('Success: ', message);
  return message;
};

var errorFn = function(message) {
  console.log('Error: ', message);
};

promise.then(function(result){
  console.log("Result: ", result);},
  function(error){
  console.log("Error!: ", error);
});

//with .catch
promise.then(function(result){
  console.log("Result: ", result);
})
  .catch(function(result){
  console.log("Error!: ", result);
});

//passing in functions
promise.then(successFn, errorFn);

//chaining promises

//return persists data between .then() statements
promise.then(function(result){
          result += '!!!!!!';
          console.log(result);
          return result;
        })
        .then(function(result){
          result += '??????';
          console.log(result);
          return result;
        })
        .then(function(result){
          result += ';eosghir;aseogirh';
          console.log(result);
          return result;
        });

var promise2 = new Promise(function(resolve, reject){
  if(ourResult){
    resolve(10);
  }
  else{
    reject (':(');
  }
});

promise2.then(successFn, errorFn).
        then(function(result){
          var product = result * 10;
          console.log('Multiply by 10: ', product);
          return product;
        });

var promise3 = new Promise(function(resolve, reject){
  if(ourResult){
    resolve(10);
  }
  else{
    reject (':(');
  }
});

promise3.then(function(result){
          var product = result * 10;
          console.log('Multiply by 10: ', product);
          return product;
        })
        .then(function(result){
          var product = result * 10;
          console.log('Multiply by 10: ', product);
          return product;
        })
        .then(function(result){
          console.log('You done effed up.');
          throw "DEAD";
        })
        .then(function(result){
          var product = result * 10;
          console.log('Multiply by 10: ', product);
          return product;}).
        catch("FAIL");









