export default (app, appState) => (`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>React SSR Example</title>
      <link rel="stylesheet" type="text/css" href="assets/bundle.css">
      <script>
        window.APP_STATE = ${JSON.stringify(appState)}
      </script>
    </head>
    <body>
      <div id="app">${app}</div>

      <script src="assets/bundle.js"></script>
    </body>
  </html>
`)