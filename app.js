require('dotenv').config();

const http = require('http');

//process.env
const hostname = process.env.HOSTNAME
console.log(hostname);
const port = process.env.PORT
console.log(port);


//before process.env
// const hostname = '127.0.0.1';  
// const port = '5000'; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


