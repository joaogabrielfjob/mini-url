import { FastifyInstance } from 'fastify'
import { CreateURLController } from '../../controller/create-url-controller.js'
import { GetURLByIdentifierController } from '../../controller/get-url-by-identifier-controller.js'

export async function urlRoutes(server: FastifyInstance) {
  server.post('/', new CreateURLController().handle)
  server.get('/:identifier', new GetURLByIdentifierController().handle)
}