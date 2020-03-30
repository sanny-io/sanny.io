import React from 'react';

export default function Tag({ children }) {
  return (
    <span className="p-2 rounded bg-blue-700">{children}</span>
  );
}

export function TagContainer({ tags }) {
  return (
    <ul className="flex flex-wrap mt-auto text-xs -my-3">
      {tags.map((tag, index) => {
        return (
          <li className="mr-2 py-3" key={index}>
            <Tag key={index}>{tag}</Tag>
          </li>
        );
      })}
    </ul>
  );
}