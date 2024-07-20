import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("ok");
})

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send({"status":"ok"})
})

app.listen(5000, ()=>console.log('listening...'))

