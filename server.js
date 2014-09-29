var http = require('http')
  , url = require('url')
  , path = require('path')
  ;

function start (port, route, handle, callback) {
  function onRequest (req, res) {
    var urlPath = url.parse(req.url).pathname
      , root = path.dirname(require.main.filename)
      , views = path.join(root, 'views')
      ;

    route(handle, views, urlPath, res);
  }

  http.createServer(onRequest).listen(port, function () {
    callback('Server is listening on port ' + port);
  });
}

exports.start = start;