const net = require('net');

const server = net
  .createServer((socket) => {
    const date = new Date();
    const str = date.getFullYear()
      + '-'
      + String(date.getMonth() + 1).padStart(2, '0')
      + '-'
      + String(date.getDate()).padStart(2, '0')
      + ' '
      + String(date.getHours()).padStart(2, '0')
      + ':'
      + String(date.getMinutes()).padStart(2, '0');

    socket.end(str + '\n');
  })
  .on('error', (err) => {
    throw err;
  });

server.listen(process.argv[2], () => {
  console.log('opened server on', server.address());
});
