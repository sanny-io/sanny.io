import React from 'react';
import Icon from '../Icon';
// @ts-ignore
import { attributes as socials } from '../../content/social.md';

export default function Social() {
  return (
    <nav>
      <ul className="flex justify-center space-x-5 text-white md:justify-end">
        {
          // @ts-ignore
          socials.map((social, key) => <li key={key}><Icon className="w-6" type={social.type} link={social.url} description={social.description} /> </li>)
        }
      </ul>
    </nav>
  )
}