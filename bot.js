var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex1 = /\/drift compatible/;
      botRegex2 = /\/bitch please/;
      botRegex3 = /\/whatever/;
      botRegex4 = /\/[Ii] don't give a fuck/;
      botRegex5 = /\/deal with it/;
      botRegex6 = /\/my nigga/;
      botRegex7 = /\/deez nuts/;
      botRegex8 = /\/[mM]elina laugh/;
      botRegex9 = /\/swerve/;
      botRegex10 = /\/awkward/;
      botRegex11 = /\/damn/;
      botRegex12 = /\/bae/;
      botRegex13 = /\/[Jj]ohn/;
      botRegex14 = /\/help/;
      botRegex15 = /\/gfy/;
      botRegex16 = /\/okay/;
      botRegex17 = /\/facepalm/;
      botRegex18 = /\/bambi/;
      botRegex19 = /\/[Hh]aneen/;
      botRegex20 = /\/[Cc]ourtney/;
      botRegex21 = /\/[Mm]egan/;
      botRegex22 = /\/[Gg]aby\b/;
      botRegex23 = /\/[Cc]had/;
      botRegex24 = /\/sniped/;
      botRegex25 = /\/gabyism/;
      botRegex26 = /\/gimmie/;
      botRegex27 = /\/[Ii]'ll allow it/;
      botRegex28 = /\/you know why [Ii]'m here/;
      botRegex29 = /\/shade/;
      botRegex30 = /\/stahp/;
      botRegex31 = /\/shit/;
      botRegex32 = /\/djkhaled/;
      botRegex33 = /\/feels/;
      botRegex34 = /\/[Ss]irius/;
      botRegex35 = /\/[Gg]iphy/; 
      botRegex36 = /\/[Ss]urprise/;
      botRegex37 = /\/[Ww]hat/;
      botRegex38 = /\/[Ll]/;
      botRegex39 = /\/[Gg]uard/;
      message = "";
      link = "";

  if(request.text && botRegex1.test(request.text)) {
    message = "drift compatible";
    link = "http://i.groupme.com/245x165.gif.b000fb258d0246c0bc175fe0d089029e.large";
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
  } else if(request.text && botRegex7.test(request.text)) {
    message = "deez nuts";
    link = "http://i.groupme.com/360x360.gif.ca6f22594e704eb28497bb284c8f4bab.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex8.test(request.text)) {
    message = "Melina laugh";
    link = "http://i.groupme.com/248x359.gif.2ba0377e53e14caeb4294ca29968a0d5.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex9.test(request.text)) {
    message = "swerve";
    link = "http://i.groupme.com/500x212.gif.0ed5276f3a7642db89152aee00986560.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex10.test(request.text)) {
    message = "awkward";
    link = "http://i.groupme.com/300x181.gif.865e5cfdde6840dd869ca64c6f35f82f.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex11.test(request.text)) {
    message = "damn";
    link = "http://i.groupme.com/320x171.gif.f4f016e5d743438ca2592f1cf237e2b6.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex12.test(request.text)) {
    message = "bae";
    link = "http://i.groupme.com/384x288.gif.0f612ffdcc94478a878dc20586c3b7aa.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex13.test(request.text)) {
    message = "john";
    link = "https://i.groupme.com/432x223.gif.cc4b77bdd3ce4d04b124698e48c7fa95.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex14.test(request.text)) {
    message = "help";
    message = "Current commands are 'drift compatible', 'bitch please', 'whatever', 'i don't give a fuck', 'deal with it', 'deez nuts', 'melina laugh', 'swerve', 'awkward', 'damn', 'bae', 'john', 'gfy', 'okay', 'facepalm', 'bambi', 'haneen', 'courtney', 'megan', 'gaby', 'chad', 'gabyism', 'sniped','gimmie' ,'I'll allow it','you know why I'm here', 'shade', 'stahp', 'shit', 'djkhaled','feels', 'sirius', 'what', 'L', 'Guard'";
    this.res.writeHead(200);
    postMessageHelp(message);
    this.res.end();
  } else if(request.text && botRegex15.test(request.text)) {
    message = "gfy";
    link = "http://i.groupme.com/785x439.gif.91c253b7137c454797591916f8822a7c.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex16.test(request.text)) {
    message = "okay";
    link = "http://i.groupme.com/245x285.gif.80841e8395204c24b32811306d65f19a.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex17.test(request.text)) {
    message = "facepalm";
    link = "http://i.groupme.com/245x245.gif.0a0dbdc33c744fb69772edf4b0f18daa.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex18.test(request.text)) {
    message = "bambi";
    link = "http://i.groupme.com/500x375.gif.6cf03b9c6f7b4c14bb7b914890978484.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex19.test(request.text)) {
    message = "haneen";
    link = "http://i.groupme.com/320x320.gif.d53df7c7b2fa421896e971ad2712d8f7.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex20.test(request.text)) {
    message = "courtney";
    link = "http://i.groupme.com/190x218.gif.a5f512127441446aa1e821a3acb27e03.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex21.test(request.text)) {
    message = "megan";
    link = "http://i.groupme.com/218x131.gif.1777f58e47e14b44b0ea2e313eeda7a9.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex22.test(request.text)) {
    message = "gaby";
    link = "http://i.groupme.com/240x360.gif.8e87ee6586c84d9da6aa6c019426b8c3.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex23.test(request.text)) {
    message = "chad";
    link = "https://i.groupme.com/256x192.gif.3eee27d338d94867b653df259d679119.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();  
  } else if(request.text && botRegex24.test(request.text)) {
    message = "sniped";
    link = "https://i.groupme.com/400x203.gif.65ad13fa6e8e4b0cbd59500be149e720.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex25.test(request.text)) {
    message = "gabyism";
    link = "https://i.groupme.com/444x250.gif.e1b9ae6ccc9b4b92882df0872e34c7b0.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex26.test(request.text)) {
    message = "gimmie";
    link = "https://i.groupme.com/176x172.gif.70375240a63d4bf38664f6741e21a7f6.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex27.test(request.text)) {
    message = "I'll allow it";
    link = "https://i.groupme.com/500x243.gif.9ce3cf158f714ffdbdb27fc6b040f626.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex28.test(request.text)) {
    message = "you know why I'm here";
    link = "https://i.groupme.com/220x162.gif.59502dde04ac4d9ba043497782527c83.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex29.test(request.text)) {
    message = "shade";
    link = "https://i.groupme.com/636x357.gif.6f6bd60e55454fdcae644326b0d2254c.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex30.test(request.text)) {
    message = "stahp";
    link = "https://i.groupme.com/350x350.gif.a432063dfe0148d5bc614122fb058fcf.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex31.test(request.text)) {
    message = "shit";
    link = "https://i.groupme.com/400x279.gif.88698b4f7d4442ae8733cc23cd85e2f0.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex32.test(request.text)) {
    message = "djkhaled";
    link = "https://i.groupme.com/448x432.gif.0347e3b0e8a84286bee4bc2708297f10.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else if(request.text && botRegex33.test(request.text)) {
    message = "feels";
    link = "https://i.groupme.com/500x282.gif.52d4c0e4a57e4cd8b0aef63e9a85a39e.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();  
  } else if(request.text && botRegex34.test(request.text)) {
    message = "sirius";
    link = "https://i.groupme.com/400x225.gif.871ac6b753fc4f0886ad5c5b2d58e96b.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex35.test(request.text)) {
    botRegex35 = request.text.split("/giphy ");
    message = botRegex35[1];
    console.log(message);
    this.res.writeHead(200);
    postMessageGiphy(message);
    this.res.end();  
  }  else if(request.text && botRegex36.test(request.text)) {
    message = "surprise";
    link = "https://i.groupme.com/318x450.gif.cecdc1a2b5aa4724bf592634d354d4e9.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex37.test(request.text)) {
    message = "what";
    link = "https://i.groupme.com/318x450.gif.cecdc1a2b5aa4724bf592634d354d4e9.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();
  } else if(request.text && botRegex38.test(request.text)) {
    message = "L";
    link = "https://i.groupme.com/338x200.gif.a883c3af34b24dea83e6831669d46381.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end();  
  } else if(request.text && botRegex39.test(request.text)) {
    message = "Guard";
    link = "https://i.groupme.com/498x278.gif.cc5eec3d70084936ab16c45a94d42799.large";
    this.res.writeHead(200);
    postMessage(message, link);
    this.res.end(); 
  } else {
    console.log(/*"don't care stuff"*/ request.text);
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

function postMessageHelp() {
  var botResponse, options, body, botReq;

  botResponse = message; // change this to picture variable

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
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

function postMessageGiphy() {
  var botResponse, options, body, botReq;

  botResponse = message; // change this to picture variable
  options = {
    hostname: 'api.giphy.com',
    path: '/v1/gifs/search?api_key=b64134024dd54d1ba81cb69abfeff5ec&q=' +botResponse + '&limit=1&offset=0&rating=R&lang=en',
    method: 'GET',
  }

  giphyReq = HTTPS.request(options, function(res) {
    console.log('statusCode:', res.statusCode);
      data = '';
        res.on('data', function(chunk) {
          data += chunk;
        });
        res.on('end', function() {
          botResponse = JSON.parse(data);
          console.log(data);
          console.log(botResponse.data.url);
        });
    
  });

  giphyReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });

  giphyReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  giphyReq.end()

  //botResponse = giphyReq.end(JSON.parse(data).url)
  
  // request.onload = function() {
  //   if (request.status >= 200 && request.status < 400){
  //     botResponse = JSON.parse(request.responseText).data.image_url;
  //     console.log(botResponse);
  //   } else {
  //     console.log('reached giphy, but API returned an error');
  //    }
  // };

  // request.onerror = function() {
  //   console.log('connection error');
  // };

  // request.send();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse,
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