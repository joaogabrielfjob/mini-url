import { FastifyReply, FastifyRequest } from 'fastify'
import { URLRepositoryPrisma } from '../infra/repository/url-repository-prisma.js'
import { prisma } from '../utils/prisma.js'
import { z } from 'zod'
import { GetURLByIdentifier } from '../app/use-case/get-url-by-identifier.js'

export class GetURLByIdentifierController {

  schema = z.object({
    identifier: z.string()
  })

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const repo = new URLRepositoryPrisma(prisma)
    const getURLByIdentifier = new GetURLByIdentifier(repo)

    const { identifier } = this.schema.parse(request.params)

    const result = await getURLByIdentifier.do({ identifier })

    reply.redirect(301, result.url)
  }
}