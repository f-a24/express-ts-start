import React from 'react';

export default ({ children }: { children: JSX.Element }) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <body>
      <div id="root">{children}</div>
      <script src="index.js" />
    </body>
  </html>
);
