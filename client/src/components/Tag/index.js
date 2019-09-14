import React from 'react';

const Tag = ({children}) => {
  return (
    <span className="p-2 rounded bg-blue-500">{children}</span>
  );
};

export default Tag;