require('dotenv').config();

const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const cookieParser = require('cookie-parser');
import authMiddleware from './auth-middleware';

app.use(express.json())
app.use(cookieParser());
app.use(authMiddleware(), function (err, req, res, next) {
  if (err.code === 'invalid_token') return next();
  return next(err);
});

import routes from './routes'
import router from './api/account'

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  routes(app);

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
