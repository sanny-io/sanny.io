import React from 'react';
import Item from './Item';
// @ts-ignore
import { attributes as info } from '../../content/navbar.md';

export default function NavBar() {
  return (
    <nav className="fixed z-10 hidden p-2 text-gray-200 transform -translate-y-1/2 bg-gray-900 border border-gray-800 shadow-2xl lg:block top-1/2 left-8">
      <ul className="grid grid-cols-1 gap-y-4">
        {
          // @ts-ignore
          info.map((props, key) => {
            return <li key={key}>
              <Item {...props} />
            </li>
          })
        }
      </ul>
    </nav>
  )
}