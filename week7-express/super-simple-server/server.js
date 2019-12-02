const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.write('Hello, world!');
        response.end();
      }
      else if(request.url ==="/balloon-animals"){
        response.write(`
        <h1> this is a heading </h1>
        <h2> welcome to balloon animal page </h2>
        `);
        response.end();
      }
      else {
        response.statusCode = 404;
        response.write('404 Page');
        response.end();
      }
    
  });

server.listen(3000);