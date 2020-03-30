import React from 'react';

export default function Link({ url, children }) {
  return (
    <a
      href={url}
      className="text-gray-400 text-s font-semibold hover:text-gray-300 hover:underline"
      target="_blank"
      rel="noreferrer noopener">
      {children}
    </a>
  );
}

export function LinkContainer({ links }) {
  return (
    <ul className="flex mb-2">
      {
        links.map((link, index) => {
          const [text, url] = link;

          return <li className="mr-3" key={index}>
            <Link url={url}>{text}</Link>
          </li>
        })
      }
    </ul>
  );
}