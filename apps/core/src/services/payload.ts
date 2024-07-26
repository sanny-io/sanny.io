import dotenv from 'dotenv'
import path from 'path'
import type { Payload } from 'payload'
import payload from 'payload'
import config from '../../payload.config'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

export const initializePayload = async (): Promise<Payload> => {
  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      config: await config,
    })
  }

  cached.client = await cached.promise

  return cached.client
}