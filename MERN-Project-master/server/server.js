const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');

require('./config/mongoose.config');
app.use(cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join("uploads")));
app.use(passport.initialize());
app.use(cookieParser());

require('./routes/user.routes')(app);
require('./routes/routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})






