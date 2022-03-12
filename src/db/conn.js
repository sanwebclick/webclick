const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.DB_NAME})
        .then(() => console.log("connected"))
        .catch((err) => console.log(err));