var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://arunimaaruni99:arunima@cluster0.pwh9n.mongodb.net/CCSIT?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connection established to Mongo')
    })
    .catch((err) => { 
        console.log(err)
    })