const searchExt = require('./exercise6.searchExt');

searchExt(process.argv[2], process.argv[3], (err, filteredFiles) => {
  if (err) {
    console.error(err);
  }
  filteredFiles.forEach((file) => {
    console.log(file);
  });
});
