declare module '*.md' {
  const content: any
  export = content
}

declare module '*.graphql' {
  const content: string
  export = content
}