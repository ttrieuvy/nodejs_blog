const express = require("express");
const path = require("path"); //chèn thư viện path vô
const hbs = require("express-handlebars"); // cài thư viện handlebars ở phiên bản mới nhất
const morgan = require("morgan");
const app = express();
const port = 3000;

// HTTP loger
app.use(morgan("combined"));

// templete engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

// 127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
