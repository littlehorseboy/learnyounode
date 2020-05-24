const http = require('http');

http
  .get(process.argv[2], (res) => {
    let result = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      result += chunk;
    });
    res.on('end', () => {
      console.log(result.length);
      console.log(result);
    });
    res.on('error', (err) => {
      console.error(err);
    });
  })
  .on('error', console.error);
