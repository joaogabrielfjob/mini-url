import { fastify } from 'fastify'
import { urlRoutes } from './infra/http/url-routes.js'
import cors from '@fastify/cors'

const server = fastify()

server.register(cors, { origin: true })
server.register(urlRoutes)

const port =  Number(process.env.PORT ?? 7777)

server
  .listen({
    host: '0.0.0.0',
    port
  })
  .then(() => {
    console.log('🚀 HTTP server running')
  })