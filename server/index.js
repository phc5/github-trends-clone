const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');

const PORT = process.env.PORT || 8080;

// declare what the client can ask for
const typeDefs = fs.readFileSync('./schema.graphql', {
  encoding: 'utf-8'
});

// logic that says how the server will respond
const resolvers = require('./resolvers/Query.js');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
// automatically parse http requests that contain json body graphQL responses are in json format
app.use(cors(), bodyParser.json());
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
