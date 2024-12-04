const express = require("express");
const app = express();
console.log("db pw", process.env.DB_PASSWORD); // undefined ; config()위에서는 env정보를 읽어올 수 없음
// console.log(process.env);
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
console.log("PORT number", PORT);
console.log("db pw", process.env.DB_PASSWORD);
console.log("db pw", process.env.DB_DATABASE);

app.get("/", (req, res) => {
  res.send("get 요청");
});
app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
