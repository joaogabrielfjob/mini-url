import { fastify } from 'fastify'
import { urlRoutes } from './infra/http/url-routes.js'
import cors from '@fastify/cors'

const server = fastify()

server.register(cors, { origin: true })
server.register(urlRoutes)

server
  .listen({ port: 7777 })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:7777')
  })