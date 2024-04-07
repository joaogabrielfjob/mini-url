import { URLRepository } from '../../../domain/url/repository/url-repository.js'
import { GetURLByIdentifierResponse } from '../types/get-url-by-identifier-reponse.js'
import { GetURLByIdentifierRequest } from '../types/get-url-by-identifier-request.js'

export class GetURLByIdentifier {

  constructor(readonly repo: URLRepository) { }

  async do(request: GetURLByIdentifierRequest): Promise<GetURLByIdentifierResponse> {
    const response = await this.repo.byIdentifier(request.identifier)

    return { ...response }
  }
}