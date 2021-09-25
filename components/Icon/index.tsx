import React from 'react'
import HtmlIcon from '../../public/assets/icons/html.svg'
import CssIcon from '../../public/assets/icons/css.svg'
import ReactIcon from '../../public/assets/icons/react.svg'
import JavaScriptIcon from '../../public/assets/icons/javascript.svg'
import DatabaseIcon from '../../public/assets/icons/database.svg'
import FileIcon from '../../public/assets/icons/file.svg'
import GitHubIcon from '../../public/assets/icons/github.svg'
import LinkedInIcon from '../../public/assets/icons/linkedin.svg'
import EmailIcon from '../../public/assets/icons/email.svg'
import GitIcon from '../../public/assets/icons/git.svg'
import CodeIcon from '../../public/assets/icons/code.svg'
import ProfileIcon from '../../public/assets/icons/profile.svg'
import SuitcaseIcon from '../../public/assets/icons/suitcase.svg'
import ProjectIcon from '../../public/assets/icons/project.svg'
import TechnologyIcon from '../../public/assets/icons/experience.svg'

export type IconType =
  'email'
  | 'github'
  | 'linkedin'
  | 'profile'
  | 'suitcase'
  | 'project'
  | 'technology'

export type IconProps = {
  type: IconType,
  link?: string,
  description?: string,
  className?: string,
}

const icons = {
  html: HtmlIcon,
  css: CssIcon,
  react: ReactIcon,
  javascript: JavaScriptIcon,
  database: DatabaseIcon,
  file: FileIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
  git: GitIcon,
  code: CodeIcon,
  profile: ProfileIcon,
  suitcase: SuitcaseIcon,
  project: ProjectIcon,
  technology: TechnologyIcon,
}

export default function Icon({ type, className, link, description }: IconProps) {
  const SvgComponent = icons[type]
  const renderedIcon = <SvgComponent className={`${className}`} aria-label={description} />

  if (link)
    return (
      <a
        className="hover:text-blue-500 focus:!ring-0 focus:text-blue-500"
        href={link}
        target={!link?.startsWith('#') ? '_blank' : ''}
        title={description}
        rel="noopener noreferrer"
        aria-label={description}
      >
        {renderedIcon}
      </a>
    )

  return renderedIcon
}