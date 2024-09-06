// 1.import express and put it imto a variable
const express = require('express')
require("./connection")
//import cors
const cors = require('cors')
var empModel=require('./model/employee')
// 2. initialize and ....
const app = new express()
// middleware
app.use(express.json())
app.use(cors())
//initialize cors
//const apps=new cors()
// 3. Api creation
app.get('/', (req, res) => { 
    res.send('Welcome')
})
app.get('/trial',(req, res)=> {
    res.send('This is a Trial Message')
})

// 4. set a port
app.listen(3004, () => {
    console.log('port is running')
})

// add Api
app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save();
        res.send({ message: "Data Added" })

    } catch (error) {
        console.log(error)
    }
})
//view
app.get('/view',async (req, res) => {
    try {
        var dis = await empModel.find();
        res.send(dis)
        
    } catch (error) {
        console.log(error)
    }
})

//delete
app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:"Data Deleted"})

    } catch (error) {
        console.log(error)
    }
})

//update
app.put("/update/:id/", async (req, res) => {
    try {
        var data= await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "Data Updated" ,data})

    } catch (error) {
        console.log(error)
    }
})
