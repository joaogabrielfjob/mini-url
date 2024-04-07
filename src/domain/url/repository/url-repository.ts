import { URL } from './../entity/url.js'

export interface URLRepository {

  create(url: URL): URL

  byIdentifier(identifier: string): URL
}