// 1.import express and put it imto a variable
const express = require('express')
require("./connection")
var empModel=require('./model/employee')
// 2. initialize and ....
const app = new express()
// middleware
app.use(express.json())
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
app.get('/view', async (req, res) => {
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
app.update("/update/:id", async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id)
        res.send({ message: "Data " })

    } catch (error) {
        console.log(error)
    }
})
