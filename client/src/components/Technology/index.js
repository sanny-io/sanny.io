import React from 'react';

const Technology = ({ name, description, icon }) => {
  return (
    <div className="flex p-3 h-full w-full rounded border border-gray-800">
      <i className={`hidden md:inline-block ${icon} fa-5x mr-4 text-gray-200`}></i>
      <div className="flex flex-col text-gray-600">
        <h4 className="text-2xl font-bold text-gray-200">{name}</h4>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  )
}

export default Technology;