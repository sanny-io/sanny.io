import dotenv from 'dotenv'
import path from 'path'
import type { Payload } from 'payload'
import payload from 'payload'
import config from '../../payload.config'
import { unstable_cache as cache } from 'next/cache'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

export async function initializePayload(): Promise<Payload> {
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

export const getProjects = cache(async () => {
  const payload = await initializePayload()
  const projects = await payload.findGlobal({
    slug: 'projects',
  })

  return projects
}, ['projects'])