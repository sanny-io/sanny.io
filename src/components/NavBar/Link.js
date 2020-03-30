import React from 'react';

export default function Link({ onClick, children }) {
  return (
    <button className="font-semibold capitalize hover:text-gray-400" onClick={onClick}>
      {children}
    </button>
  );
}