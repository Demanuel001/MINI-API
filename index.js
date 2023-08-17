const express = require('express');
const { graphql, buildSchema, GraphQLString } = require('graphql');
const bodyParser = require('body-parser');

const schema = buildSchema(`
  type Query {
    meuNome: ${GraphQLString}
  }
`);

const root = {
  meuNome: () => {
    return 'Danilo Emanuel';
  },
};

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/nome', (req, res)=>{
  res.status(200).send('Danilo Emanuel');
})

app.post("/graphql", async (req, res) =>{
  const { query } = req.body;
  const result = await graphql({
    schema,
    source: query,
    rootValue: root,
  });
  res.set('Content-Type', 'application/json');
  res.status(200).send(result);
})

app.listen(4000, ()=>{
    console.log('Servidor ativo');
})