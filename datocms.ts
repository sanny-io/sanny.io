import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_KEY}`
  }
})

export function request<T>(query: string, variables?: any) {
  return client.request<T>(query, variables)
}