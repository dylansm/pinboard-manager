'use strict'

var Pinboard = require('node-pinboard');

class PinboardManager {
  constructor() {
    this.api_token = this.setupAPIToken()
    console.log(this.api_token)
  }

  setupAPIToken() {
    return process.env.PINBOARD_API_KEY || "Please set an env"
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
