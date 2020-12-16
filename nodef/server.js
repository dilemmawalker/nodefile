// import http from 'http';

// const s=http.createServer(()=>{
//     console.log('fuck you');
// });

// s.listen(3000);

import bodyParser from 'body-parser';
import express from 'express';

const app=express();
// console.log(200);
// app.get('/',(req,res)=>{
//     res.send('I love you .....sister!');
// });
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('major');
});
app.get('/profile',(req,res)=>{
    const user={
        name:'yash',
        hobby:'flirt',
    };
    res.send(user);
});

app.post('/profile',(req,res)=>{
    console.log(req.body)
    const aa={
        name:'yash',
        hobby:'flirt',
    };
    res.send(aa);
});

app.listen(3000);