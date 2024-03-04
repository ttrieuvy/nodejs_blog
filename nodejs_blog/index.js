const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));
app.get("/trang-chu", (req, res) => {
  res.send(`
  <h1> Xin chào Vỹ Tèo, đây là trang chủ!</h1>
  `);
});

// 127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
