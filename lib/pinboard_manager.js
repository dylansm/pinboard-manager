'use strict'

var Pinboard = require('node-pinboard');

class PinboardManager {
  constructor() {
    this.setupAPIToken()
  }

  setupAPIToken() {
    var token = process.env.PINBOARD_API_KEY ||
      console.log("Please set an environment variable PINBOARD_API_KEY to use this app."); process.exit(1)
    this.api_token = token
  }
}
//var PinboardManager = function() {
  //var pb = new Pinboard(api_token);
//}

var mgr = new PinboardManager()
//var pb = new Pinboard(api_token);

//var options = {
  //old: 'Guitar',
  //new: 'zuitar'
//}

//pb.renameTag(options, function(res) {
  //console.log(res);
//})

//pb.getTags(function(res) {
  //console.log(res);
//})
