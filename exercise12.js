const http = require('http');

const server = http
  .createServer((req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      if (req.method !== 'POST') {
        throw new Error('error');
      }
      body += chunk;
    });
    req.on('end', () => {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.write(body.toUpperCase());
      res.end();
    });
  })
  .on('error', (err) => {
    throw err;
  });

server.listen(process.argv[2], () => {
  console.log('opened server on', server.address());
});
