var server = require('./server')
  , router = require('./router')
  , handlers = require('./handler')
  ;

var port = 3001
  , route = router.route
  , handle = {}
  ;

handle['/'] = handlers.request;

server.start(port, route, handle, function (res) {
  console.log(res);
});