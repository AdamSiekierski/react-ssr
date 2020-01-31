import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import renderTemplate from './template';
import App from './app/components/App';

const app = express();

app.use('/assets', express.static('dist/assets'));

app.get('/', (req, res) => {
  const appState = {
    name: req.query.name,
  }

  const appHtml = ReactDOMServer.renderToStaticMarkup(<App {...appState} />)

  res.send(renderTemplate(appHtml, appState));
})

const port = 8080 || process.env.PORT;

app.listen(port, () => console.log(`App listening on port ${port}`));