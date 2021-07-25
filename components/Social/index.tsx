import React from 'react'
import Icon from '../Icon'
import HtmlIcon from '../../public/assets/icons/html.svg'

export default function Social() {
  return (
    <nav>
      <ul className="flex justify-center space-x-5 text-white md:justify-end">
        <li className="w-6">
          <Icon type="github" link="https://github.com/sanny-io" description="My GitHub profile" />
        </li>

        <li className="w-6">
          <Icon type="linkedin" link="https://www.linkedin.com/in/sanny-sherief/" description="My LinkedIn profile" />
        </li>

        <li className="w-6">
          <Icon type="email" link="mailto:sannysherief@gmail.com" description="My email address" />
        </li>
      </ul>
    </nav>
  )
}