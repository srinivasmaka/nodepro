var request = require('request');

var s = request('https://app.pluralsight.com');


s.on('data', function(chunk){

  console.log("data is here" + chunk)

});


s.on('end' , function(){
  console.log("function end ")

})
