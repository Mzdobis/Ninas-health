import express from 'express';
import dotenv from 'dotenv'
import {database} from './configuration/database';


const app = express()
dotenv.config()
const port = process.env.PORT

database.sync({}).then( ()=>{

    console.log(`Database connected`)

}).catch((err)=>{

    console.log(err)

})

 

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})