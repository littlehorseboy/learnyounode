const http = require('http');

function asyncGet(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
        res.on('error', (err) => {
          reject(err);
        });
      })
      .on('error', reject);
  });
}

Promise.all([
  asyncGet(process.argv[2]),
  asyncGet(process.argv[3]),
  asyncGet(process.argv[4]),
])
  .then((values) => {
    values.forEach((value) => {
      console.log(value);
    });
  })
  .catch((error) => {
    console.error(error);
  });
