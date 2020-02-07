const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  const filename = req.url === '/' ? req.url + 'index.html' : req.url;

  fs.readFile(`public${filename}`, (err, body) => {
    if (err) {
      console.log('Error: ', err);
      res.writeHead(404);
      res.write('404');

      res.end();
      return;
    }

    res.write(body);

    res.end();
  });

});

server.listen(3000);