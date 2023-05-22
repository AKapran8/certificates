const app = require("./app");
const http = require("http");

const PORT = process.env.PORT || 3000;
app.set("port", PORT);

const server = http.createServer(app);
server.listen(PORT);
