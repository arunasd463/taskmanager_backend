require('./db/connect')
const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

//Middleware
app.use(express.json());

//routes
app.use('/api/',tasks)

app.get('/',(req,res)=>{
    res.send("Hello !")
})

app.get('*',(req,res)=>{
    res.status(404).send("Not Found")
})

const port = process.env.PORT || 5000
// const port = 5000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{ console.log("App is listening to ",port)})
    } catch(error){
        console.log(error)
    }
}


start()
