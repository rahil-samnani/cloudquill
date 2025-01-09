const connectToMongo  = require("./db")
const express = require('express')
var cors = require('cors')

connectToMongo() 

const app = express()
const port = 5000

app.use(express.json())
<<<<<<< HEAD
app.use(cors());
=======
const corsOptions = {
    origin: 'https://cloudquill-siwg.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'auth-token'],
    credentials: true
  };
app.use(cors(corsOptions));
>>>>>>> 24c201a5c132bb66f8895f68e497563da3d164e4


//Available Routes
app.use('/api/auth' , require("./routes/auth"))
app.use('/api/notes' , require("./routes/notes"))

app.listen(port, () => {
 console.log(`CloudQuill Backend listening on port ${port}`)
})
