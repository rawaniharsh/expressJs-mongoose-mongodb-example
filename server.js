const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = require('./src/models')

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

db.mongoose.connect(db.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log("Database connected bro")
}).catch(e=>{
    console.log(e)
});

app.get('/', (req, res)=>{
    res.json({message: "Welcome to crud application"});
});

const PORT = process.env.PORT||8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});