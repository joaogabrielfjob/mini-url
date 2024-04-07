import { URLProps } from '../types/url-props.js'

export interface URL extends URLProps { }

export class URL {

  constructor({ id, url, identifier }: URLProps) {
    this.id = id
    this.url = url
    this.identifier = identifier
  }

  create(): URL {
    return new URL({ ...this })
  }
}