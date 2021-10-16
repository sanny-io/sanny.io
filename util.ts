import path from 'path'
import fs from 'fs'
import grayMatter from 'gray-matter'
import type { GrayMatterFile, Input } from 'gray-matter'

export const readContentDirectory = (directory: string) => {
  directory = `content/${directory}`

  const fullPath = path.join(process.cwd(), directory)
  const files = fs.readdirSync(fullPath)
  const fileMap: Record<string, GrayMatterFile<Input>> = {}

  files.forEach(file => {
    fileMap[path.parse(file).name] = grayMatter(fs.readFileSync(path.join(fullPath, file), 'utf8'))
  })

  return fileMap
}

export const readContentDirectoryAsData = (directory: string) => Object.values(readContentDirectory(directory)).map(content => content.data)

export const readContent = (file: string) => {
  return grayMatter(fs.readFileSync(path.join(process.cwd(), 'content', `${file}.md`), 'utf8'))
}