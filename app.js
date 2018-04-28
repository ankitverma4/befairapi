import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import mongoose, { mongo } from "mongoose";

//routes
import users from "./routes/users";

// var users = require("./routes/users");
const app = express();

mongoose.connect("mongodb://localhost/befairdb");

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res, next) => {
    res.send("Befair API started");
})

app.use("/users", users);
export default app;