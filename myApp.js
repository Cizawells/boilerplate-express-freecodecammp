let express = require('express');
let app = express();

app.use("/public", express.static(`${__dirname}/public`));

app.use( (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})
console.log("what");
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
})

app.get("/json", (req, res) => {
  const mySecret = process.env['MESSAGE_STYLE'];
let response = "Hello json";
  if(mySecret === "uppercase") {
    response = "Hello json".toUpperCase();
  }else {
       response = "Hello json";
  }
res.json({message: response});
})
































 module.exports = app;
