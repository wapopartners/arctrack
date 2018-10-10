const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/code/pb`));

const port = 3000;

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`Arctrack demo listening on port ${port}!`));
