var Pinboard = require('node-pinboard');
var api_token = 'username:token';

var pb = new Pinboard(api_token);

//var options = {
  //old: 'Guitar',
  //new: 'guitar'
//}

//pb.renameTag(options, function(res) {
  //console.log(res);
//})

pb.getTags(function(res) {
  console.log(res);
})
