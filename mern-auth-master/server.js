const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const cors = require("cors");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
require('./config/config');

// // DB Config
// const db = require("./config/keys").mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
// app.use("/api/routes", prods);
require("./routes/api/routes")(app);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
