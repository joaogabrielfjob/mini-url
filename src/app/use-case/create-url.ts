import { URLRepository } from '../../domain/repository/url-repository.js'
import { CreateURLRequest } from '../types/create-url-request.js'
import { CreateURLResponse } from '../types/create-url-response.js'
import { URL } from '../../domain/entity/url.js'
import { nanoid } from '../../utils/nanoid.js'

export class CreateURL {

  constructor(readonly repo: URLRepository) { }

  async do(request: CreateURLRequest): Promise<CreateURLResponse> {
    const identifier = nanoid()
    
    const url = new URL({ url: request.url, identifier }).create()

    const response = await this.repo.create(url)

    return { ...response }
  }
}