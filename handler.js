var fs = require('fs')
  , path = require('path')
  ;

function handle (file, response) {
  fs.stat(filePath, function (err, res) {
    var contentType;

  	if (error) {
  	  res.writeHead(404, {"Content-Type": "text/plain"});
  	  res.write("404 Not found");
  	  res.end();
  	}

    switch (path.extname(file)) {
      case '.html':
        contentType = 'text/html';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.js':
        contentType = 'text/javascript';
        break;
      default:
        contentType = 'text/plain';
    }

    res.writeHead(200, {'Content-Type': contentType});
    fs.createReadStream(filePath).pipe(res);
  })
}

exports.request = request;