const express = require("express");
const app = express();
const port = 3000;

app.get("/xin-chao", (req, res) => {
  res.send("Hello World! Xin chào Vỹ Tèo");
});

// 127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
