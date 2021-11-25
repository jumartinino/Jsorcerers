const express = require('express');
require('./config/dotenv')();
require('./config/sequelize');

const app = express();
const port = process.env.PORT;
const cors = require('cors');
const routes = require('./routes/routes');

const passport = require("passport");
require("./middlewares/jwtPassport")(passport);
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);
app.use(cors);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3333"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    