const connectToMongo  = require("./db")
const express = require('express')
var cors = require('cors')

connectToMongo() 

const app = express()
const port = 8080

app.use(express.json())
app.use(cors({
 origin : ["https://cloudquill.vercel.app"],
 methods : ["POST","GET"],
 credentials : true
}))

//Available Routes
app.use('/api/auth' , require("./routes/auth"))
app.use('/api/notes' , require("./routes/notes"))

app.listen(port, () => {
 console.log(`CloudQuill Backend listening on port ${port}`)
})
