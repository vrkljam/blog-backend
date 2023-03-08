const express =require ('express')

const app=express()


app.get('/', (req,res) =>{
    res.send('did this work?')
})

const port = process.env.PORT || 8005
app.listen((port), ()=>{
    console.log(`app on port: ${port}`)
})