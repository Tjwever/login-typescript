import express, { Router } from 'express'
import mongoose from 'mongoose'
import http, { Server } from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import 'dotenv/config'

import router from './router'

const app = express()

app.use(
    cors({
        credentials: true,
    })
)

app.use(cookieParser())
app.use(compression())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log('server listening on port 8080')
})

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('error', (error: Error) =>
    console.log('connection error')
)

app.use('/', router())
