import { URL } from './../entity/url.js'

export interface URLRepository {

  create(url: URL): Promise<URL>

  byIdentifier(identifier: string): Promise<URL>
}