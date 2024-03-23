
const express = require('express');
const app = express();
const cors = require('cors');
const { userRouter } = require('./routes/userRouter');

const port = 3000;
app.use(cors());

app.use(express.json()); // or app.use(bodyParser.json())

app.use("/user",userRouter);

app.listen(port,()=>{
    console.log("server listening on port " + port);
})