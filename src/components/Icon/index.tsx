import React from 'react';
import { ReactComponent as HtmlIcon } from '../../../assets/icons/html.svg';
import { ReactComponent as CssIcon } from '../../../assets/icons/css.svg';
import { ReactComponent as ReactIcon } from '../../../assets/icons/react.svg';
import { ReactComponent as JavaScriptIcon } from '../../../assets/icons/javascript.svg';
import { ReactComponent as DatabaseIcon } from '../../../assets/icons/database.svg';
import { ReactComponent as FileIcon } from '../../../assets/icons/file.svg';
import { ReactComponent as GitHubIcon } from '../../../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../../assets/icons/email.svg';
import { ReactComponent as GitIcon } from '../../../assets/icons/git.svg';
import { ReactComponent as CodeIcon } from '../../../assets/icons/code.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/profile.svg';
import { ReactComponent as SuitcaseIcon } from '../../../assets/icons/suitcase.svg';
import { ReactComponent as ProjectIcon } from '../../../assets/icons/project.svg';
import { ReactComponent as TechnologyIcon } from '../../../assets/icons/experience.svg';

export type IconType = 'email' | 'github' | 'linkedin' | 'profile' | 'suitcase' | 'project' | 'technology';
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
  const SvgComponent = icons[type];
  const renderedIcon = <SvgComponent className={`${className}`} aria-label={description} />

  if (link)
    return (
      <a
        className="hover:text-blue-500"
        href={link}
        target={!link?.startsWith('#') ? '_blank' : ''}
        title={description}
        rel="noopener noreferrer">
        {renderedIcon}
      </a>
    )

  return renderedIcon;
}