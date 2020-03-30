import React from 'react';

export default function Technology({ name, description }) {
  return (
    <div className="flex p-3 h-full w-full rounded border border-gray-800">
      <div className="flex flex-col text-gray-600">
        <h4 className="text-2xl font-bold text-gray-200">{name}</h4>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
}