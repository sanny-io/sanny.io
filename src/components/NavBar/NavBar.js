import React from 'react';
import Link from './Link';
import { useHistory } from 'react-router-dom';

export default function NavBar({ links, navigateTo }) {
  const history = useHistory();

  return (
    <nav className="w-full py-4 fixed bg-gray-900 text-gray-200 border-b border-gray-800 hidden lg:block">
      <ul className="flex px-4">
        {links.map((linkText, index) => {
          return (
            <li className="mr-8" key={index}>
              <Link onClick={() => {
                history.push('/');
                setTimeout(() => navigateTo(linkText), 0);
              }}>{linkText}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}