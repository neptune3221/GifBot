var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex1 = /\/drift compatible/;
      botRegex2 = /\/bitch please/;
      botRegex3 = /\/whatever/;
      botRegex4 = /\/I don't give a fuck/;
      botRegex5 = /\/deal with it/;
      botRegex6 = /\/my nigga/;
      message = "";
      link = "";

  if(request.text && botRegex1.test(request.text)) {
    message = "drift compatible";
    link = "http://i.groupme.com/245x165.gif.b000fb258d0246c0bc175fe0d089029e.large"
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex2.test(request.text)) {
    message = "bitch please";
    link = "http://i.groupme.com/500x250.gif.e3d764eb8d9a45ea8202a4bc14c50452.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex3.test(request.text)) {
    message = "whatever";
    link = "http://i.groupme.com/500x281.gif.145407d9c6024cd1a181abf628e7392e.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex4.test(request.text)) {
    message = "I don't give a fuck";
    link = "http://i.groupme.com/432x243.gif.2589579794d14a5f8c3c1f44d22b9797.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex5.test(request.text)) {
    message = "deal with it";
    link = "http://i.groupme.com/500x273.gif.c1e27e8ac06a44ea9df62eb53b491cee.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex6.test(request.text)) {
    message = "my nigga";
    link = "http://i.groupme.com/552x464.jpeg.1e322ce495f24bc3ae65fe3dc9dc32d7.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else {
    console.log(/*"don't care"*/ request.text);
    this.res.writeHead(200);
    this.res.end();
  }
}




function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = ""; // change this to picture variable

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
    "attachments" : [
       {
          "type" : "image",
          "url"  : link
       }
    ]
  };

  console.log('sending ' + message + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;