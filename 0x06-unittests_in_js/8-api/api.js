const express = require('express');
const port = 7865;
const app = express();

app.listen(port, () => console.log(`API available on localhost port ${port}!`));
// app.use(express.json());
app.get('/', (req, res) => res.send('Welcome to the payment system'));