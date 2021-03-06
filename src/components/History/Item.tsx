import React from 'react';
import Markdown from 'react-markdown';

export type ItemProps = {
  name: string,
  title: string,
  description: string,
  startDate: Date,
  endDate?: Date,
  url: string,
}

export default function Item({ name, title, description, startDate, endDate, url }: ItemProps) {
  return (
    <div className="w-full p-4 duration-300 bg-gray-900 border border-gray-800 rounded hover:bg-gray-800">
      <h4 className="inline-block mb-2 text-4xl font-semibold hover:text-blue-500">
        <a href={url}>{name}</a>
      </h4>
      <p className="mb-1 text-xl font-light uppercase text">{title}</p>
      <p className="mb-4">{`${startDate} - ${endDate ? endDate : 'Present'}`}</p>
      <hr className="w-64 mb-4 border-t-2 border-blue-600" />
      <Markdown className="space-y-4">{description}</Markdown>
    </div>
  )
}

// export default function Item({ name, title, description, startDate, endDate, url }: ItemProps) {
//   return (
//     <div className="w-1/2 p-4 transition-colors duration-300 bg-gray-900 border border-blue-600 rounded timeline-item hover:bg-gray-800">
//       <h4 className="mb-2 text-4xl font-semibold">
//         <a className="hover:text-blue-500" href={url}>{name}</a>
//       </h4>
//       <p className="mb-1 text-xl font-light uppercase text">{title}</p>
//       <p className="mb-4">{`${startDate} - ${endDate ? endDate : 'Present'}`}</p>
//       <p>{description}</p>
//     </div>
//   )
// }