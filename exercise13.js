const http = require('http');
const url = require('url');

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
      const reqUrl = url.parse(req.url, true);
      const { query, pathname } = reqUrl;
      const isoDate = new Date(query.iso);

      if (pathname === '/api/parsetime') {
        const hour = isoDate.getHours();
        const minute = isoDate.getMinutes();
        const second = isoDate.getSeconds();

        res.writeHead(200, { 'content-type': 'application/json' });
        res.write(JSON.stringify({
          hour,
          minute,
          second,
        }));
      } else if (pathname === '/api/unixtime') {
        const unixtime = isoDate.getTime();

        res.writeHead(200, { 'content-type': 'application/json' });
        res.write(JSON.stringify({
          unixtime,
        }));
      } else {
        res.writeHead(404);
      }
      res.end();
    });
  })
  .on('error', (err) => {
    throw err;
  });

server.listen(process.argv[2], () => {
  console.log('opened server on', server.address());
});
