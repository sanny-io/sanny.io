import React from 'react';
import scrollIntoView from 'scroll-into-view';

const NavBar = ({ links }) => {
  return (
    <nav className="w-full py-4 fixed bg-gray-900 text-gray-200 border-b border-gray-800 hidden lg:block">
      <ul className="flex px-4">
        {links.map(([linkText, linkClassName], index) => {
          return (
            <li className="mr-8" key={index}>
              <button className="font-semibold capitalize hover:text-gray-400" onClick={e => {
                e.preventDefault();
                scrollIntoView(document.getElementsByClassName(linkClassName)[0]);
              }}>{linkText}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;