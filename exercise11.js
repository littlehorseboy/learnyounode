const http = require('http');
const fs = require('fs');

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });

    const readStream = fs.createReadStream(process.argv[3]);

    readStream
      .on('open', () => {
        readStream.pipe(res);
      })
      .on('error', (err) => {
        res.end(err);
      });
  })
  .on('error', (err) => {
    throw err;
  });

server.listen(process.argv[2], () => {
  console.log('opened server on', server.address());
});
