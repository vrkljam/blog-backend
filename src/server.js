const express =require ('express')


let articlesInfo =[
    {
    name:"react1",
    upvotes:0,
    comments:[],
    },
    {
    name:"react2",
    upvotes:0,
    comments:[],
    },
    {
    name:"react3",
    upvotes:0,
    comments:[],
    },

]
const app=express()

app.use(express.json())


// app.get('/', (req,res) =>{
//     res.send('did this work?')
// })
// app.get('/blah/:author', (req,res) =>{
//     const author =req.params.author
//     res.send(`yo ${author}!!`)
// })
// app.post('/blah', (req,res) =>{
//      res.send(`hello ${req.body.author}`)
// })

app.put('/api/articles/:name/upvote', (req,res) =>{
    const {name} = req.params;
    const article = articlesInfo.find(a => a.name ===name);
    if(article){
        article.upvotes +=1;
        res.send(`the ${name} has ${article.upvotes} upvotes`)
    }else {
        res.send('doesn\'t exist')
    }
}
)

const port = process.env.PORT || 8005
app.listen((port), ()=>{
    console.log(`app on port: ${port}`)
})