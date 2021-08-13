const express = require("express");
// const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
// const prods = require("./routes/api/routes");

const cors = require("cors");
const app = express();

// Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
app.use(cors());
require('./config/config');


// Passport middleware
app.use(passport.initialize());

// // Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
// app.use("/api/routes", prods);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require("./routes/api/users");
require("./routes/api/routes")(app);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
