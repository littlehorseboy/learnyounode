const http = require('http');

http
  .get(process.argv[2], (res) => {
    let data = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(data.length);
      console.log(data);
    });
    res.on('error', (err) => {
      console.error(err);
    });
  })
  .on('error', console.error);
