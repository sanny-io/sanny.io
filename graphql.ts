import { GraphQLClient } from 'graphql-request'

export default new GraphQLClient(process.env.DATOCMS_URL as string, {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_KEY}`
  }
})