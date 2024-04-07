import { fastify } from 'fastify'
import { urlRoutes } from './infra/url/http/url-routes.js'

const server = fastify()

server.register(urlRoutes)

server
  .listen({ port: 7777 })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:7777')
  })