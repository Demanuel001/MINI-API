const express = require('express');

const app = express();

app.get('/nome', (req, res)=>{
    res.status(200).send('Danilo Emanuel');
})

app.listen(4000, ()=>{
    console.log('Servidor ativo');
})