import React from 'react';
import { ReactComponent as HtmlIcon } from '../../icons/html.svg';
import { ReactComponent as CssIcon } from '../../icons/css.svg';
import { ReactComponent as ReactIcon } from '../../icons/react.svg';
import { ReactComponent as JavaScriptIcon } from '../../icons/javascript.svg';
import { ReactComponent as DatabaseIcon } from '../../icons/database.svg';
import { ReactComponent as FileIcon } from '../../icons/file.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../icons/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';

const iconTypes = {
  html: HtmlIcon,
  css: CssIcon,
  react: ReactIcon,
  javascript: JavaScriptIcon,
  database: DatabaseIcon,
  file: FileIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
}

export default function Icon({ type, link, ...props }) {
  const IconComponent = iconTypes[type];
  const renderedComponent = <IconComponent {...props} />

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {renderedComponent}
      </a>
    );
  }

  return renderedComponent;
};