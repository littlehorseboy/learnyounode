const fs = require('fs');
const path = require('path');

module.exports = (folder, ext, callback) => {
  fs.readdir(folder, (err, files) => {
    if (err) {
      return callback(err);
    }
  
    const filteredFiles = files
      .filter((file) => path.extname(file) === `.${ext}`);
  
    return callback(null, filteredFiles);
  });
};
