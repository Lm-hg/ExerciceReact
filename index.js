
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.post('/', async(req,res)=>{

    const data = req.body;
    if(data.nom !='' && data.prix!= '' && data.details!='' && data.url !=''){
        res.status(200).json(data);
    }else{
        res.status(400).json({message:'Champ vide'});
    }

   
    
})

app.listen(8888,function(){
    console.log('oui oui');
})

