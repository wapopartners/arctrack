const express = require('express');
const { green } = require('chalk');
const path = require('path');

const app = express();

const port = 3000;
// for /track-click route, serve from the `./demo` and `./dist`
app.use('/track-click', express.static(path.resolve(__dirname, '..', 'demo')));
app.use('/track-click', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/track-scroll', express.static(path.resolve(__dirname, '..', 'demo')));
app.use('/track-scroll', express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/track-click', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'code', 'click.html'));
});

app.get('/track-scroll', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'code', 'scroll.html'));
})

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
