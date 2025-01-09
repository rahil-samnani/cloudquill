const connectToMongo  = require("./db")
const express = require('express')
var cors = require('cors')

connectToMongo() 

const app = express()
const port = 5000

app.use(express.json())
app.use(cors());
const corsOptions = {
    origin: 'https://cloudquill-siwg.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'auth-token'],
    credentials: true
  };
app.use(cors(corsOptions));


//Available Routes
app.use('/api/auth' , require("./routes/auth"))
app.use('/api/notes' , require("./routes/notes"))

app.listen(port, () => {
 console.log(`CloudQuill Backend listening on port ${port}`)
})
