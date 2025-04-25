const path = require('path')

module.exports = (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
};
