export type Image = {
  url: string,
  width: number,
  height: number,
}

export type Info = {
  name: string,
  title: string,
  headshot: Image,
  github: string,
  linkedin: string,
  email: string,
  about: string,
}

export type Icon =
  | 'html'
  | 'css'
  | 'react'
  | 'javascript'
  | 'database'
  | 'file'
  | 'github'
  | 'linkedin'
  | 'email'
  | 'git'
  | 'code'
  | 'profile'
  | 'suitcase'
  | 'project'
  | 'technology'

export type Experience = {
  name: string,
  description: string,
  icon: Icon,
}

export type Project = {
  name: string,
  url: string,
  sourceUrl?: string,
  blurb: string,
  description: string,
  image: Image,
  plaiceholder: string,
  tags: string[],
}

export type Section = {
  content: string,
}