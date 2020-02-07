const http = require('http');
const fs = require('fs');
const debug = require('debug');

const log = debug('*');

const server = http.createServer((req, res) => {

  const filename = req.url === '/' ? req.url + 'index.html' : req.url;

  fs.readFile(`public${filename}`, (err, body) => {
    if (err) {
      log('Error: ', err);
      res.writeHead(404);
      res.write('404');

      res.end();
      return;
    }

    log('OK: ', filename);

    res.write(body);

    res.end();
  });

});

server.listen(3000);