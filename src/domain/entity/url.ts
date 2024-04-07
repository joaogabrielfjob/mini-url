import { URLProps } from '../types/url-props.js'

export interface URL extends URLProps { }

export class URL {

  constructor({ id, url, identifier }: URLProps) {
    this.validateURL(url)

    this.id = id
    this.url = url
    this.identifier = identifier
  }

  private validateURL(url: string) {
    if (!url.includes('http') || !url.includes('://') || !url.includes('.'))
      throw new Error('INVALID_URL')
  }
}