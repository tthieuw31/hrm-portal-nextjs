const fs = require("fs");
const https = require("https");
const next = require("next");
const path = require("path");

const port = process.env.PORT || 4001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  https
    .createServer(
      {
        key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
        cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
      },
      (req, res) => handle(req, res)
    )
    .listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${port}`);
    });
});
