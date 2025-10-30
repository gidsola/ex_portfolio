
import express from 'express';
import { renderToString } from 'react-dom/server';
import { join } from 'path';
import { readFileSync } from 'fs';
import React from 'react';
import render from '../../dist/ssr.js';

export default function ssrRoute(/**@type {express.Express} */app) {
console.log('Registering SSR route...');
  app
    .get(/^(?!\/api).*/, (req, res, next) => {

      if (req.url.startsWith('/api/')) return next();

      try {
        const appHtml = renderToString(React.createElement(render.default, { url: req.url }));

        const template = readFileSync(
          join(process.cwd(), 'server/src/views/index.ejs'),
          'utf-8'
        );

        res.send(template.replace('<%- appHtml %>', appHtml));
      }
      catch (error) {
        next(error);
      };
    });
};
