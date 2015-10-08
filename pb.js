var Pinboard = require('node-pinboard');
var api_token = process.env.PINBOARD_API_KEY;

var pb = new Pinboard(api_token);

//var options = {
  //old: 'Guitar',
  //new: 'zuitar'
//}

//pb.renameTag(options, function(res) {
  //console.log(res);
//})

pb.getTags(function(res) {
  console.log(res);
})
