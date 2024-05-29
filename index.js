
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.post('/', async(req,res)=>{
    const data = req.body;

        res.status(200).json(data);
   
    
})

app.listen(8888,function(){
    console.log('oui oui');
})

