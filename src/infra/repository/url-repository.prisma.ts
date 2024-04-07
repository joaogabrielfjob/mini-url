import { PrismaClient } from '@prisma/client'
import { URLRepository } from '../../domain/repository/url-repository.js'
import { URL } from '../../domain/entity/url.js'

export class URLRepositoryPrisma implements URLRepository {

  constructor(private prisma: PrismaClient) { }

  async create({ id, url, identifier }: URL): Promise<URL> {
    try {
      const result = await this.prisma.url.create({
        data: { id, url, identifier }
      })

      return new URL({ ...result })
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

      if (result) return new URL({ ...result })

      throw new Error('URL_NOT_FOUND')
    } catch(exception) {
      console.error(exception)

      throw exception
    }
  }

  async byURL(url: string): Promise<URL | void> {
    try {
      const result = await this.prisma.url.findUnique({
        where: { url }
      })

      if (result) return new URL({ ...result })
    } catch(exception) {
      console.error(exception)

      throw exception
    }
  }
}