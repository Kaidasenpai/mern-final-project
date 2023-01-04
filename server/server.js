require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/user')


// express app

const app = express()


// middleware

app.use(express.json())
app.use ((req,res, next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use ('/api/blogs/', blogRoutes)
app.use('/api/user', userRoutes)



//connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_UI)
    .then(()=>{
        // listen  for requests
        app.listen(process.env.PORT, ()=> {
            console.log('Connected to db & listening on port', process.env.PORT)

        })

    })
    .catch((error)=>{
        console.log(error)
    })


