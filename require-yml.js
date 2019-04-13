var fs = require('fs');
var yaml = require('js-yaml');

require.extensions['.yml'] =
  require.extensions['.yaml'] = function(module, filename) {
  try {
    module.exports = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};
