const express = require('express');
const { green } = require('chalk');
const path = require('path');

const app = express();

const port = 3000;

app.use('/track-dom', express.static(`${__dirname}/code/static`));
app.use('/track-dom', express.static(path.resolve(__dirname, '..')));

app.get('/track-dom', (req, res) => {
  res.sendFile('index.html');
});

app.get('/omniture-requests/*', ({ query }, res) => {
  if (query) {
    if (query.pe && query.pe === 'lnk_o') {
      console.log(
        green('Link tracking request made:\n'),
        query,
      );
    } else {
      console.log(
        green('Page tracking request made:\n'),
        query,
      );
    }
  }
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Arctrack demo listening on port ${port}!`));
