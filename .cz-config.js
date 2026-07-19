const fs = require('fs');
const path = require('path');
const config = require('@aurorafe/cz-config');

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'));

module.exports = {
  ...config,
  scopes: packages,
};
