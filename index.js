var connect = require('connect');
var serverStatic = require('serve-static');

connect().use(serverStatic(__dirname)).listen(8000, function() {
  console.log("Listening on port 8000!");
});
