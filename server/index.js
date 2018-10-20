const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors(), bodyParser.json());
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));