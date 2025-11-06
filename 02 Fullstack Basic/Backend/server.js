import express from 'express';
import dotenv from 'dotenv';

dotenv.configDotenv()

const app = express()

// app.get('/',(req,res)=>{
//     res.send('Server Running')
// })

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res)=>{

    const jokes = [
        {
            id:1,
            title: 'Joke 1',
            content:"Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id:2,
            title: 'Joke 2',
            content:"Why did the scarecrow win an award? Because he was outstanding in his field!" 
        },
        {
            id:3,
            title: 'Joke 3',
            content:"Why don't skeletons fight each other? They don't have the guts."
        },
        {
            id:4,
            title: 'Joke 4',
            content:"What do you call fake spaghetti? An impasta!"
        }
    ]

    res.send(jokes)

})

app.listen(port,()=>{
    console.log(`App Running at http://localhost:${port}/api/jokes`);
    
})
