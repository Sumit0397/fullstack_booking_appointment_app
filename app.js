const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require("./utils/database");

var  cors = require('cors');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const userRoute = require("./routes/userRoute");


app.use(cors());

app.use("/", userRoute);
app.use("/post" , userRoute);


sequelize.sync()
.then((result) => {
    // console.log(result);
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
})