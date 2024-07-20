import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createReferalDetails, getAllReferalDetails } from '../Controller/referalDetailsController.js'
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', getAllReferalDetails)
app.post('/', createReferalDetails)

app.listen(5000, ()=>console.log('listening...'))

