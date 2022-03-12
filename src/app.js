require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.POST || 8000;

const path = require("path");
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req,res) => {
    res.send("home page")
})

app.use(express.urlencoded({extended:false}));

require("./db/conn");
const Contact = require("./models/contact");

app.post("/contact", async(req,res) => {
    try {
        const enq = new Contact(req.body);
        //console.log(enq);
        const createContact = await enq.save();
        if(createContact) {
            res.status(201).send("Create Successfully")
        } else {
            res.status(400).send("Could not inserted");
        }
    } catch (errer) {
        res.status(400).send("Could not inserted");
    }
    
})

app.listen(port, () => {
    console.log(`listing port: ${port}`)
})