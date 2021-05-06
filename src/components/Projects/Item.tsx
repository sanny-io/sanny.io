import React, { useContext } from 'react';
import Tag from './Tag';
import Markdown from 'react-markdown';
import AppContext from '../../state';

export type ItemProps = {
  name: string,
  url: string,
  description: string,
  details: string,
  image: string,
  tags?: string[],
}

export function Details({ name, url, description, details, image, tags }: ItemProps) {
  const { setActiveProject, activeProjectVisible, setActiveProjectVisible } = useContext(AppContext);

  return (
    <div
      className={`fixed z-10 w-screen h-screen text-white ${!activeProjectVisible && 'hidden'}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={e => {
        if (e.target === e.currentTarget) {
          setActiveProjectVisible(false);
        }
      }}
    >
      <div className="container flex flex-col justify-center h-full p-8 mx-auto pointer-events-none">
        <div className="p-4 bg-gray-800 rounded pointer-events-auto">
          <h2 className="mb-4 text-6xl">{name}</h2>
          <ul className="space-x-2">
            {
              tags?.map((tag, key) => <li className="inline" key={key}><Tag>{tag}</Tag></li>)
            }
          </ul>
          <hr className="my-4 border-t-2 border-blue-600" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Markdown className="row-start-2 mb-4 space-y-4 lg:row-start-auto">{details}</Markdown>
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  )
}

// export function Details({ name, url, description, details, image, tags }: ItemProps) {
//   return (
//     <div className="fixed z-10 w-screen h-screen text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//       <div className="container flex flex-col justify-center h-full p-8 mx-auto">
//         <div className="p-4 bg-gray-800 rounded">
//           <h2 className="mb-8 text-6xl">{name}</h2>
//           <ul className="space-x-2">
//             {
//               tags?.map((tag, key) => <li className="inline" key={key}><Tag>{tag}</Tag></li>)
//             }
//           </ul>
//           <Markdown className="mb-4 space-y-4">{details}</Markdown>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Item({ name, url, description, image, tags, details }: ItemProps) {
  const { setActiveProject } = useContext(AppContext);

  return (
    <div className="flex border border-gray-800 shadow-2xl even:flex-row-reverse odd:text-right">
      <div className="flex flex-col w-full px-4 py-2 md:py-4 md:px-8 lg:w-1/2">
        <a href={url} target="__blank" rel="noopener noreferrer">
          <h3 className="mb-2 text-3xl font-semibold hover:text-blue-500">{name}</h3>
        </a>
        <Markdown className="mb-4 space-y-4">{description}</Markdown>
        <ul className="mb-4 space-x-2">
          {
            tags?.map((tag, key) => <li className="inline" key={key}><Tag>{tag}</Tag></li>)
          }
        </ul>
        <div>
          <button className="px-4 py-2" onClick={() => setActiveProject({ name, url, description, image, tags, details })}>View Project</button>
        </div>
      </div>
      <a className="hidden w-1/2 lg:flex lg:flex-col lg:justify-center" href={url} target="__blank" rel="noopener noreferrer">
        <img className="object-cover w-full" src={image} />
      </a>
    </div>
  )
}