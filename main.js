const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const readline = require("readline");
const ver = "1.0"
const cmd = "ver - Show Current Version\nexit - Exit The Progrem And Stop Host\ncls - Clear The Screen\nport - Show The Current Port\nurl - Show The URL Of The Site\nautor - Show The Owner Of Tool"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
});

  router.get('/',function(req,res){
      res.sendFile(path.join(__dirname+'/index.html'));
      //res.send('<style>* {font-family: Arial;}</style><title>Error</title><center><h1>Error</h1>Hello, if you are owner of this website then please create index.html file in files folder.<br><b><h3>Why i See This</h3></b>This website does not have a index.html inside files folder. If you are owner of it then code the .html file and move it to files folder with name index<div class="pow"><h5>Powered By HTTP</h5></div></center>')
  });


app.use('/', router);
if(process.env.port == null || process.env.port == "") {
  app.listen(8080);
}
else
{
  app.listen(process.env.port)
}
  if(process.env.port == 80) {
    console.clear()
    console.log("Running at localhost");
  }
  else
  {
    console.clear()
    console.log('Running at Port ' + process.env.port);
  }
  if(process.env.port == null || process.env.port == "") {
    console.clear()
    process.env.port = 8080
    console.log('Running at Port 8080');
  }
input()


function input() {
  const input = rl.question(">", function(put) {
  if(put == "ver") {
    console.log('HTTP ' + ver)
    startinput()
  }
  if(put == "exit" || put == "quit") {
    process.exit(0)
  }
  if(put == "cls") {
    console.clear();
    startinput()
  }
  
  if(put == "port") {
    console.log('Current port is ' + process.env.port)
    startinput()
  }
  if(put == "help") {
    console.log(cmd)
    startinput()
  }
  if(put == "hostname" || put == "domain" || put == "href" || put == "url" || put == "adress") {
    if(process.env.port == 80) {
      console.log('The current hostname is http://localhost')
      startinput()
    }
    else
    {
      console.log('The current hostname is http://localhost:' + process.env.port)
      startinput()
    }
    if(process.env.port == 443) {
      console.log('The current hostname is https://localhost')
      startinput()
    }
  }
  if(put == "") {
    startinput()
  }
  if(put == "autor" || put == "developer") {
    console.log('This tool was created by Kuba')
    startinput()
  }
  });
}

function startinput() {
  input()
}