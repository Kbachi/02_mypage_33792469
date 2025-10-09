// Load the built-in HTTP module
var http = require("http");
const port = 8000;

// Create a simple web server
http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Page</title>
      </head>
      <body>
        <h1>Hello, I am Usayd Hossenbaccus</h1>
        <h2>Welcome to my Node.js web app</h2>
        <p> Lab 1 of Dynamic Web Applications.</p>
      </body>
    </html>
  `);
}).listen(port, function () {
  console.log(`Node server is running on port ${port}...`);
});