import { PrismaClient } from '@prisma/client'
import { URL } from '../../../domain/url/entity/url.js'
import { URLRepository } from '../../../domain/url/repository/url-repository.js'

export class URLRepositoryPrisma implements URLRepository {

  constructor(private prisma: PrismaClient) { }

  async create({ id, url, identifier }: URL): Promise<URL> {
    try {
      const result = await this.prisma.url.create({
        data: { id, url, identifier }
      })

      return new URL({ ...result }).create()
    } catch(exception) {
      console.error(exception)

      throw exception
    }
  }

  async byIdentifier(identifier: string): Promise<URL> {
    try {
      const result = await this.prisma.url.findUnique({
        where: { identifier }
      })

      if (result) return new URL({ ...result }).create()

      throw new Error('URL not found!')
    } catch(exception) {
      console.error(exception)

      throw exception
    }
  }
}