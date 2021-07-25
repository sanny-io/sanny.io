import React from 'react'
import NavBarItem, { NavBarItemProps } from './NavBarItem'

export type NavBarProps = {
  children: NavBarItemProps[],
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <nav className="fixed z-10 hidden p-2 text-gray-200 transform -translate-y-1/2 bg-gray-900 border border-gray-800 shadow-2xl lg:block top-1/2 left-8">
      <ul className="grid grid-cols-1 gap-y-4">
        {
          children.map((navBarItem, key) => {
            return <li key={key}>
              <NavBarItem {...navBarItem} />
            </li>
          })
        }
      </ul>
    </nav>
  )
}