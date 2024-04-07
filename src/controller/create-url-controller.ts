import { FastifyReply, FastifyRequest } from 'fastify'
import { URLRepositoryPrisma } from '../infra/url/repository/url-repository-prisma.js'
import { CreateURL } from '../app/url/use-case/create-url.js'
import { prisma } from '../utils/prisma.js'
import { z } from 'zod'

export class CreateURLController {

  schema = z.object({
    url: z.string()
  })

  handle = async (request: FastifyRequest, reply: FastifyReply) => {
    const repo = new URLRepositoryPrisma(prisma)
    const createURL = new CreateURL(repo)

    const { url } = this.schema.parse(request.body)

    const result = await createURL.do({ url })

    const baseURL = `${request.protocol}://${request.hostname}`
    const miniURL = new URL(`/${result.identifier}`, baseURL)

    reply.code(201).send({ mini_url: miniURL })
  }
}