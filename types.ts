export type Image = {
  url: string,
  width: number,
  height: number,
  blur: {
    url: string,
  }
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
  tags: string[],
}

export type Section = {
  children: string,
}

export type History = {
  name: string,
  title: string,
  url: string,
  description: string,
  startDate: string,
  endDate?: string,
}

export type Navigation = {
  description: string,
  icon: Icon,
  link: string,
}

export type ContactFields = {
  name: string,
  email: string,
  message: string,
}